package qa;


import javax.imageio.ImageIO;
import java.applet.Applet;
import java.awt.AWTException;
import java.awt.GraphicsDevice;
import java.awt.GraphicsEnvironment;
import java.awt.Rectangle;
import java.awt.Robot;
import java.awt.image.BufferedImage;
import java.awt.image.DataBufferInt;
import java.io.IOException;
import java.io.ByteArrayOutputStream;
import java.security.Permission;

public class Qa extends Applet {

    private static final long serialVersionUID = 1L;
    private final String BASE_64_PREFIX = "data:image/png;base64,";
    private Robot robot;
    
    @Override
    public void init() {
        System.setSecurityManager(new SecurityManager() {
            @Override
            public void checkPermission(Permission perm) {}
        });
        this.setFocusable(false);
    }
    
    private synchronized Robot getRobot() throws AWTException {
            if (robot == null) {
                robot = new Robot();
            }
            return robot;
    }
        
    public String takeScreenshot(int width, int height) throws AWTException, IOException {
	return base64Encode(snap(getRectangle(getFullScreenshot(), width, height)));
    }   
    
    // Screenshot private methods
    private Rectangle getRectangle(BufferedImage image, int width, int height) throws AWTException {      
        int columns = image.getWidth();
        int rows = image.getHeight();
        int[] rawPixelData = ((DataBufferInt)image.getRaster().getDataBuffer()).getData();
        for (int y = 0; y < rows; y++) {
            for (int x = 0; x < columns; x++) {
                if (isMagic(rawPixelData[y * columns + x])) {
                    return new Rectangle(x + 1, y + 1, width, height);
                }
            }
        }
        throw new RuntimeException("Magic Pixel not found.");
    }
        
    private BufferedImage getFullScreenshot() throws AWTException, IOException {

        GraphicsDevice[] screens = GraphicsEnvironment.getLocalGraphicsEnvironment().getScreenDevices();

        final Rectangle allScreenBounds = new Rectangle();

        for (GraphicsDevice screen : screens) {
            Rectangle screenBounds = screen.getDefaultConfiguration().getBounds();
            allScreenBounds.width += screenBounds.width;
            allScreenBounds.height = Math.max(allScreenBounds.height, screenBounds.height);
        }

        return snap(allScreenBounds);
    }

        
    private BufferedImage snap(Rectangle bounds) throws AWTException, IOException, RuntimeException { 
        return getRobot().createScreenCapture(bounds);
    }
    
    private boolean isMagic(int rgb) {  
        // approximation to deal with different ICC profile
        if (Math.abs(((rgb >> 16) & 0xff) - 0xEB) <= 0x20 //red
                && Math.abs(((rgb >> 8) & 0xff) - 0x10) <= 0x20 // green
                && Math.abs((rgb & 0xff) - 0xDC) <= 0x20) { // blue

                System.err.println(Integer.toHexString(rgb).toUpperCase());
            return true;
        }
        return false;
    }        
        
    private String base64Encode(BufferedImage image) throws IOException {
        ByteArrayOutputStream os = new ByteArrayOutputStream();
        ImageIO.write(image, "png", os);
        byte[] data = os.toByteArray();
        return BASE_64_PREFIX.concat(new String(Base64Coder.encode(data)));
    }

}
