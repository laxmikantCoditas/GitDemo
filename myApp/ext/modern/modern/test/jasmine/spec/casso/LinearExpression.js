Ext.require(['Ext.casso.LinearExpression', 'Ext.casso.SlackVariable'], function() {
    describe('LinearExpression', function() {
        var subject = {};
        var solver = {
            columns: {}
        };
        
        it('should have the correct properties passed to the constructor', function() {
            var variable = new Ext.casso.Variable(10);
            var expression = new Ext.casso.LinearExpression(variable, 20, 30);
            
            expect(expression.getConstant()).toBe(30);
            expect(expression.getTerms()[variable.getName()]).toBe(20);
        });

        it('should have the correct properties when only passing a variable to the constructor', function() {
            var variable = new Ext.casso.Variable(10);
            var expression = new Ext.casso.LinearExpression(variable);
            
            expect(expression.getConstant()).toBe(0);
            expect(expression.getTerms()[variable.getName()]).toBe(1);
        });
        
        it('should have the correct properties when only passing a number to the constructor', function() {
            var expression = new Ext.casso.LinearExpression(10);
            
            expect(expression.getConstant()).toBe(10);
            expect(Ext.Object.getSize(expression.getTerms())).toBe(0);
        });
                
        it('should have the correct properties when not passing any arguments to the constructor', function() {
            var expression = new Ext.casso.LinearExpression();
            
            expect(expression.getConstant()).toBe(0);
            expect(Ext.Object.getSize(expression.getTerms())).toBe(0);
        });
        
        it('should be able to initialize from a hash', function() {
            var terms = {};
            terms['v1'] = 20;
            
            var expression = new Ext.casso.LinearExpression();
            
            expression.initializeFromHash(20, terms);
            
            expect(expression.getConstant()).toBe(20);
            expect(Ext.Object.getValues(expression.getTerms())[0]).toBe(20);
        });
        
        it('should be able to clone itself', function() {
            var variable = new Ext.casso.Variable(10);
            var expression = new Ext.casso.LinearExpression(variable, 20, 30);
            
            expression = expression.clone();
            
            expect(expression.getConstant()).toBe(30);
            expect(expression.getTerms()[variable.getName()]).toBe(20);
        });
        
        it('should be able to multiply itself', function() {
            var variable = new Ext.casso.Variable(10);
            var expression = new Ext.casso.LinearExpression(variable, 20, 30);
            
            expression.multiplyMe(2);
            
            expect(expression.getConstant()).toBe(60);
            expect(expression.getTerms()[variable.getName()]).toBe(40);
        });
        
        it('should be able to multiply without affecting itself passing a multiplier number', function() {
            var variable = new Ext.casso.Variable(10);
            var expression = new Ext.casso.LinearExpression(variable, 20, 30);            
            var multiplied = expression.multiply(2);
            
            expect(expression.getConstant()).toBe(30);
            expect(expression.getTerms()[variable.getName()]).toBe(20);
            
            expect(multiplied.getConstant()).toBe(60);
            expect(multiplied.getTerms()[variable.getName()]).toBe(40);
        });
        
        it('should be able to multiply without affecting itself passing another constant expression', function() {
            var variable = new Ext.casso.Variable(10);
            var expression1 = new Ext.casso.LinearExpression(variable, 20, 30);
            var expression2 = new Ext.casso.LinearExpression(2);
                    
            var multiplied = expression1.multiply(expression2);
            
            expect(expression1.getConstant()).toBe(30);
            expect(expression1.getTerms()[variable.getName()]).toBe(20);
            expect(expression2.getConstant()).toBe(2);
            
            expect(multiplied.getConstant()).toBe(60);
            expect(multiplied.getTerms()[variable.getName()]).toBe(40);
        });
        
        it('should be able to multiply a constant expression without affecting itself passing another expression', function() {
            var variable = new Ext.casso.Variable(10);
            var expression2 = new Ext.casso.LinearExpression(variable, 20, 30);
            var expression1 = new Ext.casso.LinearExpression(2);
                    
            var multiplied = expression1.multiply(expression2);
            
            expect(expression2.getConstant()).toBe(30);
            expect(expression2.getTerms()[variable.getName()]).toBe(20);
            expect(expression1.getConstant()).toBe(2);
            
            expect(multiplied.getConstant()).toBe(60);
            expect(multiplied.getTerms()[variable.getName()]).toBe(40);
        });
        
        it('should be able to divide without affecting itself passing a multiplier number', function() {
            var variable = new Ext.casso.Variable(10);
            var expression = new Ext.casso.LinearExpression(variable, 40, 60);            
            var divided = expression.divide(2);
            
            expect(expression.getConstant()).toBe(60);
            expect(expression.getTerms()[variable.getName()]).toBe(40);
            
            expect(divided.getConstant()).toBe(30);
            expect(divided.getTerms()[variable.getName()]).toBe(20);
        });
        
        it('should be able to divide without affecting itself passing another constant expression', function() {
            var variable = new Ext.casso.Variable(10);
            var expression1 = new Ext.casso.LinearExpression(variable, 40, 60);
            var expression2 = new Ext.casso.LinearExpression(2);
                    
            var divided = expression1.divide(expression2);
            
            expect(expression1.getConstant()).toBe(60);
            expect(expression1.getTerms()[variable.getName()]).toBe(40);
            expect(expression2.getConstant()).toBe(2);
            
            expect(divided.getConstant()).toBe(30);
            expect(divided.getTerms()[variable.getName()]).toBe(20);
        });

        it('should be able to add a variable without affecting itself', function() {
            var variable1 = new Ext.casso.Variable(10);
            var variable2 = new Ext.casso.Variable(15);
            var expression = new Ext.casso.LinearExpression(variable1, 20, 30);
            var sum = expression.plus(variable2);
            
            expect(Ext.Object.getSize(expression.getTerms())).toBe(1);
            expect(Ext.Object.getKeys(sum.getTerms())[0]).toBe(variable1.getName());
            expect(Ext.Object.getKeys(sum.getTerms())[1]).toBe(variable2.getName());
        });
        
        it('should be able to add an expression without affecting itself', function() {
            var variable1 = new Ext.casso.Variable(10);
            var variable2 = new Ext.casso.Variable(15);
            var expression1 = new Ext.casso.LinearExpression(variable1, 2, 15);
            var expression2 = new Ext.casso.LinearExpression(variable2, 3, 15);
            var sum = expression1.plus(expression2);
            
            expect(Ext.Object.getSize(expression1.getTerms())).toBe(1);
            expect(Ext.Object.getSize(expression2.getTerms())).toBe(1);
            
            expect(Ext.Object.getKeys(sum.getTerms())[0]).toBe(variable1.getName());
            expect(Ext.Object.getKeys(sum.getTerms())[1]).toBe(variable2.getName());
            expect(Ext.Object.getValues(sum.getTerms())[0]).toBe(2);
            expect(Ext.Object.getValues(sum.getTerms())[1]).toBe(3);
            expect(sum.getConstant()).toBe(30);
        });
        
        it('should be able to subtract a variable without affecting itself', function() {
            var variable1 = new Ext.casso.Variable(10);
            var variable2 = new Ext.casso.Variable(15);
            var expression = new Ext.casso.LinearExpression(variable1, 20, 30);
            var result = expression.minus(variable2);
            
            expect(Ext.Object.getSize(expression.getTerms())).toBe(1);
            expect(Ext.Object.getKeys(result.getTerms())[0]).toBe(variable1.getName());
            expect(Ext.Object.getKeys(result.getTerms())[1]).toBe(variable2.getName());
        });
        
        it('should be able to subtract an expression without affecting itself', function() {
            var variable1 = new Ext.casso.Variable(10);
            var variable2 = new Ext.casso.Variable(15);
            var expression1 = new Ext.casso.LinearExpression(variable1, 2, 30);
            var expression2 = new Ext.casso.LinearExpression(variable2, 3, 15);
            var sum = expression1.minus(expression2);
            
            expect(Ext.Object.getSize(expression1.getTerms())).toBe(1);
            expect(Ext.Object.getSize(expression2.getTerms())).toBe(1);
            
            expect(Ext.Object.getKeys(sum.getTerms())[0]).toBe(variable1.getName());
            expect(Ext.Object.getKeys(sum.getTerms())[1]).toBe(variable2.getName());
            expect(Ext.Object.getValues(sum.getTerms())[0]).toBe(2);
            expect(Ext.Object.getValues(sum.getTerms())[1]).toBe(-3);
            expect(sum.getConstant()).toBe(15);
        });
        
        it('should be able to add an expression to itself', function() {
            var variable1 = new Ext.casso.Variable(10);
            var variable2 = new Ext.casso.Variable(15);
            var expression1 = new Ext.casso.LinearExpression(variable1, 2, 15);
            var expression2 = new Ext.casso.LinearExpression(variable2, 3, 15);
            
            expression1.addExpression(expression2, 2);
            
            expect(Ext.Object.getSize(expression1.getTerms())).toBe(2);            
            expect(Ext.Object.getKeys(expression1.getTerms())[0]).toBe(variable1.getName());
            expect(Ext.Object.getKeys(expression1.getTerms())[1]).toBe(variable2.getName());
            expect(Ext.Object.getValues(expression1.getTerms())[0]).toBe(2);
            expect(Ext.Object.getValues(expression1.getTerms())[1]).toBe(6);
            expect(expression1.getConstant()).toBe(45);
        });     
        
        it('should be able to add an expression negatively to itself', function() {
            var expression1 = new Ext.casso.LinearExpression(new Ext.casso.Variable(10), 2, 15);
            var expression2 = new Ext.casso.LinearExpression(new Ext.casso.Variable(15), 3, 20);
            
            expression1.addExpression(expression2, -1);   
            expect(Ext.Object.getValues(expression1.getTerms())[0]).toBe(2);
            expect(Ext.Object.getValues(expression1.getTerms())[1]).toBe(-3);         
            expect(expression1.getConstant()).toBe(-5);
        });
        
        it('should be able to add an expression without passing a number', function() {
            var expression1 = new Ext.casso.LinearExpression(new Ext.casso.Variable(10), 2, 15);
            var expression2 = new Ext.casso.LinearExpression(new Ext.casso.Variable(15), 3, 20);
            
            expression1.addExpression(expression2);

            expect(Ext.Object.getValues(expression1.getTerms())[0]).toBe(2);
            expect(Ext.Object.getValues(expression1.getTerms())[1]).toBe(3);
            expect(expression1.getConstant()).toBe(35);
        });
        
        it('should correctly add a new variable to the expression', function() {
            var expression1 = new Ext.casso.LinearExpression(new Ext.casso.Variable(10), 2);
            
            expression1.addVariable(new Ext.casso.Variable(20), 3);

            expect(Ext.Object.getValues(expression1.getTerms())[0]).toBe(2);
            expect(Ext.Object.getValues(expression1.getTerms())[1]).toBe(3);
        });
        
        it('should correctly replace an existing variable with coefficients added up', function() {
            var variable = new Ext.casso.Variable(20);
            var expression1 = new Ext.casso.LinearExpression(variable, 2, 15);
            
            expect(Ext.Object.getValues(expression1.getTerms())[0]).toBe(2);            
            expression1.addVariable(variable, 3);
            expect(Ext.Object.getValues(expression1.getTerms())[0]).toBe(5);
        });
        
        it('should correctly remove an existing variable if the sum of the coefficient is 0', function() {
            var variable = new Ext.casso.Variable(20);
            var expression1 = new Ext.casso.LinearExpression(variable, 2, 15);
            
            expect(Ext.Object.getValues(expression1.getTerms())[0]).toBe(2);            
            expression1.addVariable(variable, -2);
            expect(Ext.Object.getSize(expression1.getTerms())).toBe(0);
        });
        
        it('should set the variable to the new coefficient when using setVariable', function() {
            var variable = new Ext.casso.Variable(20);
            var expression1 = new Ext.casso.LinearExpression(variable, 2, 15);
            
            expression1.setVariable(variable, 3);
            expect(Ext.Object.getValues(expression1.getTerms())[0]).toBe(3);
        });
        
        it('should set the variable to the new coefficient when using setVariable', function() {
            var variable = new Ext.casso.Variable(20);
            var expression1 = new Ext.casso.LinearExpression(variable, 2, 15);
            
            expression1.setVariable(variable, 3);
            expect(Ext.Object.getValues(expression1.getTerms())[0]).toBe(3);
        });
        
        it('should return a pivotable variable is there is one', function() {
            var variable1 = new Ext.casso.SlackVariable();
            var variable2 = new Ext.casso.Variable(20);
            var expression = new Ext.casso.LinearExpression(variable2, 2, 15);
            expression.addVariable(variable1);
            expect(expression.getAnyPivotableVariable()).toBe(variable1);
        });
        
        it('should substitute out a variable with an expression', function() {
            var variable = new Ext.casso.Variable(20);
            var substituted = new Ext.casso.Variable(10);
            var expression = new Ext.casso.LinearExpression(variable, 2, 20);
            
            expression.substituteOut(variable, new Ext.casso.LinearExpression(substituted, 3, 40), subject, solver);
            expect(Ext.Object.getValues(expression.getTerms())[0]).toBe(6);
            expect(expression.getConstant()).toBe(100);
        });
        
        it('should substitute out a variable with an expression with a variable that already exists', function() {
            var variable1 = new Ext.casso.Variable(20);
            var variable2 = new Ext.casso.Variable(30);
            var expression1 = new Ext.casso.LinearExpression(variable1, 2, 20);
            var expression2 = new Ext.casso.LinearExpression(variable2, 10, 40);
            
            expression1.addVariable(variable2, 3);
            expression1.substituteOut(variable1, expression2, subject, solver);
            
            expect(Ext.Object.getValues(expression1.getTerms())[0]).toBe(23);
        });
        
        it('should change the subject of the expression', function() {
            var variable1 = new Ext.casso.Variable(20);
            var variable2 = new Ext.casso.Variable(10);
            var variable3 = new Ext.casso.Variable(30);
            var expression = new Ext.casso.LinearExpression(variable1, 2, 40);
            expression.addVariable(variable2, 4);
            expression.addVariable(variable3, 8);
            expression.changeSubject(variable1, variable2);
            
            expect(expression.getConstant()).toBe(-10);
            expect(Ext.Object.getSize(expression.getTerms())).toBe(2);
            expect(Ext.Object.getValues(expression.getTerms())[0]).toBe(0.25);
            expect(Ext.Object.getValues(expression.getTerms())[1]).toBe(-2);
        });
        
        it('should return the correct coefficient when calling getCoefficientFor', function() {
            var variable = new Ext.casso.Variable(10);
            var expression = new Ext.casso.LinearExpression(variable, 5, 30);
            expect(expression.getCoefficientFor(variable)).toBe(5);
        });
    });
});