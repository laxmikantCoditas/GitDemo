<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>

    <xsl:key name="ComponentsByValueKey" match="component" use="." />
    <xsl:key name="ItemsByComponentKey" match="component" use="." />

    <!--
    There is only one of these in the document, so match it and process its items.
    -->
    <xsl:template match="channel">
        <ul class="components">
            <xsl:for-each select="./item/component[generate-id()=generate-id(key('ComponentsByValueKey',.)[1])]">
                <xsl:sort select="."/> <!-- sorted by Component -->
                <li class="component"><xsl:value-of select="."/><ul class="tickets">
                    <xsl:for-each select="key('ItemsByComponentKey',.)">
                        <xsl:sort select="../key"/> <!-- sorted by Component -->
                        <xsl:call-template name="generateTicket">
                            <xsl:with-param name="ticket" select=".."/>
                        </xsl:call-template>
                    </xsl:for-each>
                </ul></li>
            </xsl:for-each>
        </ul>
    </xsl:template>

    <!--
    This template generates a TR for the ticket if the "Release Note" custom field does not
    contain "x" (indicating that the ticket should be skipped).
    -->
    <xsl:template name="generateTicket">
        <xsl:param name="ticket"/>

        <!--
        This variable selects the "ReleaseNote" custom field.
        -->
        <xsl:variable name="note" select="$ticket/customfields/customfield[@id='customfield_10350']"/>

        <!--
        This variable holds either the Release Note (if we have such a node) or the ticket
        summary.
        -->
        <xsl:variable name="noteText">
            <xsl:choose>
                <xsl:when test="$note">
                    <xsl:value-of select="$note/customfieldvalues/customfieldvalue"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="$ticket/summary"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:variable>

        <xsl:if test="$noteText != 'x'">
            <li class="ticket">
                <span class="ticket-number">[<xsl:value-of select="$ticket/key"/>]</span>&#160;<span class="ticket-notes"><xsl:value-of select="$ticket/summary"/></span>
            </li>
        </xsl:if>
    </xsl:template>
</xsl:stylesheet>
