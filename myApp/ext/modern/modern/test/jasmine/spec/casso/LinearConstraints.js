Ext.require([
    'Ext.casso.LinearConstraint', 
    'Ext.casso.LinearEquation',
    'Ext.casso.LinearInequality'
], function() {
    describe('LinearConstraint', function() {
        it('should initialize correct properties from constructor', function() {
            var constraint = new Ext.casso.LinearConstraint('test', Ext.casso.Strength.weak, 2);
            expect(constraint.getExpression()).toBe('test');
            expect(constraint.getStrength()).toBe(Ext.casso.Strength.weak);
            expect(constraint.getWeight()).toBe(2);
        });
        
        it('should initialize with proper defaults', function() {
            var constraint = new Ext.casso.LinearConstraint('test');
            expect(constraint.getExpression()).toBe('test');
            expect(constraint.getStrength()).toBe(Ext.casso.Strength.required);
            expect(constraint.getWeight()).toBe(1);
        });
        
        it('should allow for updating the expression', function() {
            var constraint = new Ext.casso.LinearConstraint('test');
            constraint.setExpression('another');
            expect(constraint.getExpression()).toBe('another');
        });
    });
    
    describe('LinearEquation', function() {
        it('should initialize correct properties from constructor passing an expression and a variable', function() {
            var expression = new Ext.casso.LinearExpression(20);
            var variable = new Ext.casso.Variable(20);
            var constraint = new Ext.casso.LinearEquation(expression, variable, Ext.casso.Strength.weak, 2);

            expect(constraint.getExpression().getConstant()).toBe(20);
            expect(Ext.Object.getKeys(constraint.getExpression().getTerms())[0]).toBe(variable.getName());
            expect(Ext.Object.getValues(constraint.getExpression().getTerms())[0]).toBe(-1);
            expect(constraint.getStrength()).toBe(Ext.casso.Strength.weak);
            expect(constraint.getWeight()).toBe(2);
        });
        
        it('should initialize correct properties from constructor passing a variable and expression', function() {
            var expression = new Ext.casso.LinearExpression(20);
            var variable = new Ext.casso.Variable(20);
            var constraint = new Ext.casso.LinearEquation(variable, expression);

            expect(constraint.getExpression().getConstant()).toBe(20);
            expect(Ext.Object.getKeys(constraint.getExpression().getTerms())[0]).toBe(variable.getName());
            expect(Ext.Object.getValues(constraint.getExpression().getTerms())[0]).toBe(-1);
        });
        
        it('should initialize correct properties from constructor passing a variable and a number', function() {
            var variable = new Ext.casso.Variable(20);
            var constraint = new Ext.casso.LinearEquation(variable, 20);

            expect(constraint.getExpression().getConstant()).toBe(20);
            expect(Ext.Object.getKeys(constraint.getExpression().getTerms())[0]).toBe(variable.getName());
            expect(Ext.Object.getValues(constraint.getExpression().getTerms())[0]).toBe(-1);
        });
        
        it('should initialize correct properties from constructor passing two expressions', function() {
            var expression1 = new Ext.casso.LinearExpression(20);
            var expression2 = new Ext.casso.LinearExpression(30);
            var constraint = new Ext.casso.LinearEquation(expression1, expression2);

            expect(constraint.getExpression().getConstant()).toBe(-10);
        });
        
        it('should initialize correct properties from constructor passing two numbers', function() {
            var constraint = new Ext.casso.LinearEquation(20, 30);
            expect(constraint.getExpression().getConstant()).toBe(-10);
        });
        
        it('should initialize correct properties from constructor passing expression and a number', function() {
            var expression = new Ext.casso.LinearExpression(20);
            var constraint = new Ext.casso.LinearEquation(expression, 30);
            expect(constraint.getExpression().getConstant()).toBe(-10);
        });
        
        it('should initialize correct properties from constructor passing a number and an expression', function() {
            var expression = new Ext.casso.LinearExpression(20);
            var constraint = new Ext.casso.LinearEquation(30, expression);
            expect(constraint.getExpression().getConstant()).toBe(10);
        });
    });
    
    describe('LinearInequality', function() {
        it('should initialize correct properties from constructor passing GEQ, expression and a variable', function() {
            var expression = new Ext.casso.LinearExpression(20);
            var variable = new Ext.casso.Variable(20);
            var constraint = new Ext.casso.LinearInequality(expression, Ext.casso.Casso.GEQ, variable, Ext.casso.Strength.weak, 2);
                        
            expect(constraint.getExpression().getConstant()).toBe(20);
            expect(Ext.Object.getKeys(constraint.getExpression().getTerms())[0]).toBe(variable.getName());
            expect(Ext.Object.getValues(constraint.getExpression().getTerms())[0]).toBe(-1);
            expect(constraint.getStrength()).toBe(Ext.casso.Strength.weak);
            expect(constraint.getWeight()).toBe(2);
        });
        
        it('should initialize correct properties from constructor passing LEQ, expression and a variable', function() {
            var expression = new Ext.casso.LinearExpression(20);
            var variable = new Ext.casso.Variable(20);
            var constraint = new Ext.casso.LinearInequality(expression, Ext.casso.Casso.LEQ, variable);
                        
            expect(constraint.getExpression().getConstant()).toBe(-20);
            expect(Ext.Object.getKeys(constraint.getExpression().getTerms())[0]).toBe(variable.getName());
            expect(Ext.Object.getValues(constraint.getExpression().getTerms())[0]).toBe(1);
        });
        
        it('should initialize correct properties from constructor passing an expression, strength and weight', function() {
            var expression = new Ext.casso.LinearExpression(20);
            var constraint = new Ext.casso.LinearInequality(expression, Ext.casso.Strength.weak, 2);
                        
            expect(constraint.getExpression().getConstant()).toBe(20);
            expect(constraint.getStrength()).toBe(Ext.casso.Strength.weak);
            expect(constraint.getWeight()).toBe(2);
        });
        
        it('should initialize correct properties from constructor passing GEQ and two variables', function() {
            var variable1 = new Ext.casso.Variable(20);
            var variable2 = new Ext.casso.Variable(30);
            var constraint = new Ext.casso.LinearInequality(variable1, Ext.casso.Casso.GEQ, variable2);
                        
            expect(constraint.getExpression().getConstant()).toBe(0);
            expect(Ext.Object.getKeys(constraint.getExpression().getTerms())[0]).toBe(variable2.getName());
            expect(Ext.Object.getKeys(constraint.getExpression().getTerms())[1]).toBe(variable1.getName());
            
            expect(Ext.Object.getValues(constraint.getExpression().getTerms())[0]).toBe(-1);
            expect(Ext.Object.getValues(constraint.getExpression().getTerms())[1]).toBe(1);
        });
        
        it('should initialize correct properties from constructor passing LEQ and two variables', function() {
            var variable1 = new Ext.casso.Variable(20);
            var variable2 = new Ext.casso.Variable(30);
            var constraint = new Ext.casso.LinearInequality(variable1, Ext.casso.Casso.LEQ, variable2);
                        
            expect(constraint.getExpression().getConstant()).toBe(0);
            expect(Ext.Object.getKeys(constraint.getExpression().getTerms())[0]).toBe(variable2.getName());
            expect(Ext.Object.getKeys(constraint.getExpression().getTerms())[1]).toBe(variable1.getName());
            
            expect(Ext.Object.getValues(constraint.getExpression().getTerms())[0]).toBe(1);
            expect(Ext.Object.getValues(constraint.getExpression().getTerms())[1]).toBe(-1);
        });
    });
});