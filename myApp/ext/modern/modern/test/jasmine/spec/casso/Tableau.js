Ext.require(['Ext.casso.Tableau'], function() {
    describe('Tableau', function() {
        it('should have the correct properties passed to the constructor', function() {
            var tableau = new Ext.casso.Tableau();
            
            expect(tableau.getColumns()).toBeDefined();
            expect(tableau.getRows()).toBeDefined();
            expect(tableau.getInfeasibleRows()).toBeDefined();
            expect(tableau.getExternalRows()).toBeDefined();
            expect(tableau.getExternalParametricVariables()).toBeDefined();
        });

        it('it should properly insert a column variable', function() {
            var tableau = new Ext.casso.Tableau(),
                column = new Ext.casso.Variable(10),
                variable = new Ext.casso.Variable(20);
            
            row = tableau.insertColumnVariable(column, variable);

            expect(tableau.getColumns()[column.getName()]).toBe(row);
            expect(Ext.Object.getValues(row)[0]).toBe(variable);
        });
        
        it('it should properly add a row', function() {
            var tableau = new Ext.casso.Tableau(),
                term = new Ext.casso.Variable(10),
                expression = new Ext.casso.LinearExpression(term, 2, 20),
                variable = new Ext.casso.Variable(20)
                
            tableau.addRow(variable, expression);

            expect(tableau.getRows()[variable.getName()]).toBe(expression);
            expect(Ext.Object.getValues(tableau.getExternalRows())[0]).toBe(variable);
            expect(Ext.Object.getValues(tableau.getExternalParametricVariables())[0]).toBe(term);
        });
        
        it('it should properly add a row and not add the variable and terms if they are not external', function() {
            var tableau = new Ext.casso.Tableau(),
                term = new Ext.casso.SlackVariable(),
                expression = new Ext.casso.LinearExpression(term, 2, 20),
                variable = new Ext.casso.SlackVariable();
                
            tableau.addRow(variable, expression);
            expect(Ext.Object.getSize(tableau.getExternalRows())).toBe(0);
            expect(Ext.Object.getSize(tableau.getExternalParametricVariables())).toBe(0);
        });
        
        it('it should properly remove a column', function() {
            var tableau = new Ext.casso.Tableau(),
                column = new Ext.casso.Variable(10),
                expression = new Ext.casso.LinearExpression(column, 2, 20),
                variable = new Ext.casso.Variable(20);
            
            tableau.addRow(variable, expression);
            tableau.externalRows[column.name] = column;

            expect(Ext.Object.getKeys(tableau.getColumns())[0]).toBe(column.name);
            expect(Ext.Object.getValues(tableau.getExternalRows())[0]).toBe(variable);
            expect(Ext.Object.getValues(tableau.getExternalParametricVariables())[0]).toBe(column);
            expect(Ext.Object.getSize(tableau.getExternalRows())).toBe(2);
            
            tableau.removeColumn(column);
            
            expect(Ext.Object.getSize(tableau.getColumns())).toBe(0);
            expect(Ext.Object.getSize(expression.getTerms())).toBe(0);
            expect(Ext.Object.getSize(tableau.getExternalRows())).toBe(1);
            expect(Ext.Object.getSize(tableau.getExternalParametricVariables())).toBe(0);
        });
        
        it('it should properly add a row and not add the variable and terms if they are not external', function() {
            var tableau = new Ext.casso.Tableau(),
                column = new Ext.casso.Variable(10),
                expression = new Ext.casso.LinearExpression(column, 2, 20),
                row = new Ext.casso.Variable(20);
                
            tableau.addRow(row, expression);
            tableau.infeasibleRows[row.name] = row;
            
            expect(tableau.getRows()[row.name]).toBe(expression);
            expect(Ext.Object.getKeys(tableau.getColumns())[0]).toBe(column.name);
            expect(Ext.Object.getValues(Ext.Object.getValues(tableau.getColumns())[0])[0]).toBe(row);
            expect(Ext.Object.getValues(tableau.getExternalRows())[0]).toBe(row);
            expect(Ext.Object.getValues(tableau.getExternalParametricVariables())[0]).toBe(column);
            
            tableau.removeRow(row);
            
            expect(Ext.Object.getSize(tableau.getRows())).toBe(0);
            expect(Ext.Object.getSize(tableau.getInfeasibleRows())).toBe(0);
            expect(Ext.Object.getSize(tableau.getExternalRows())).toBe(0);
            expect(Ext.Object.getSize(Ext.Object.getValues(tableau.getColumns())[0])).toBe(0);
        });
        
        it('it should properly substitute a column with an expression', function() {
            var tableau = new Ext.casso.Tableau(),
                column = new Ext.casso.Variable(10),
                expression = new Ext.casso.LinearExpression(column, 2, 20),
                row = new Ext.casso.Variable(20),
                slack = new Ext.casso.SlackVariable(),
                spy = spyOn(expression, 'substituteOut').andCallThrough(),
                expression2 = new Ext.casso.LinearExpression(row, 3, -20);
            
            tableau.addRow(row, expression);
            tableau.externalParametricVariables[column.name] = column;
            
            expect(Ext.Object.getKeys(tableau.getColumns())[0]).toBe(column.name);
            expect(Ext.Object.getValues(Ext.Object.getValues(tableau.getColumns())[0])[0]).toBe(row);
            expect(Ext.Object.getValues(tableau.getExternalRows())[0]).toBe(row);
            expect(Ext.Object.getValues(tableau.getExternalParametricVariables())[0]).toBe(column);
            expect(Ext.Object.getSize(tableau.getExternalParametricVariables())).toBe(1);
            
            tableau.addRow(slack, expression);
            expression2.addVariable(column);
            expression2.addVariable(slack);
            tableau.substituteOut(column, expression2);
            
            expect(spy).toHaveBeenCalledWith(column, expression2, row, tableau);
            expect(tableau.getExternalRows()[column.name]).toBe(column);
            expect(tableau.getColumns()[column.name]).not.toBeDefined();
            expect(Ext.Object.getSize(tableau.getExternalParametricVariables())).toBe(0);
            expect(Ext.Object.getSize(tableau.getInfeasibleRows())).toBe(1);
        });
    });
});