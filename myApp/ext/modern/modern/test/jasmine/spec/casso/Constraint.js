Ext.require([
    'Ext.casso.Constraint',
    'Ext.casso.SpecialConstraint',
    'Ext.casso.EditConstraint',
    'Ext.casso.StayConstraint',
    'Ext.casso.Variable'
], function() {
    describe('Constraint', function() {
        it('should set all properties correct when passing both strength and weight', function() {
            var constraint = new Ext.casso.Constraint(Ext.casso.Strength.strong, 2);
            expect(constraint.hashCode).toBe(1);
            expect(constraint.strength).toBe(Ext.casso.Strength.strong);
            expect(constraint.weight).toBe(2);
        });
        
        it('should set all properties correct when passing just strength', function() {
            var constraint = new Ext.casso.Constraint(Ext.casso.Strength.strong);
            expect(constraint.strength).toBe(Ext.casso.Strength.strong);
            expect(constraint.weight).toBe(1);
        });
        
        it('should set all properties correct when passing just weight', function() {
            var constraint = new Ext.casso.Constraint(null, 2);
            expect(constraint.strength).toBe(Ext.casso.Strength.required);
            expect(constraint.weight).toBe(2);
        });
        
        it('should set all properties correct when passing no arguments', function() {
            var constraint = new Ext.casso.Constraint();
            expect(constraint.strength).toBe(Ext.casso.Strength.required);
            expect(constraint.weight).toBe(1);
        });
        
        it('should set return correct value for isRequired', function() {
            var constraint = new Ext.casso.Constraint();
            expect(constraint.isRequired).toBe(true);
        });
        
        it('should properly update the strength when calling setStrength', function() {
            var constraint = new Ext.casso.Constraint();
            constraint.setStrength(Ext.casso.Strength.weak);
            expect(constraint.getStrength()).toBe(Ext.casso.Strength.weak);
            expect(constraint.isRequired).toBe(false);
        });
        
        it('should properly update the strength when calling setWeight', function() {
            var constraint = new Ext.casso.Constraint();
            constraint.setWeight(2);
            expect(constraint.getWeight()).toBe(2);
        });
        
        it('should know how many times it was added', function() {
            var constraint = new Ext.casso.Constraint();
            constraint.addedTo();
            constraint.addedTo();
            expect(constraint.timesAdded).toBe(2);
            constraint.removedFrom();
            expect(constraint.timesAdded).toBe(1);
        });
        
        it('should return the correct flags', function() {
            var constraint = new Ext.casso.Constraint();
            expect(constraint.isEditConstraint).toBe(false);
            expect(constraint.isInequality).toBe(false);
            expect(constraint.isStayConstraint).toBe(false);
        });
    });
    
    describe('SpecialConstraint', function() {
        it('should support constructor call passing variable, strength and weight', function() {
            var variable = new Ext.casso.Variable(20);
            var constraint = new Ext.casso.SpecialConstraint(variable, Ext.casso.Strength.weak, 3);
            
            expect(constraint.getVariable()).toBe(variable);
            expect(constraint.getExpression().getTerms()[variable.name]).toBe(-1);
            expect(constraint.getExpression().getConstant()).toBe(variable.getValue());
        });
        
        it('should return the correct flags', function() {
            var variable = new Ext.casso.Variable(20);
            var constraint = new Ext.casso.SpecialConstraint(variable);
            expect(constraint.isEditConstraint).toBe(false);
            expect(constraint.isInequality).toBe(false);
            expect(constraint.isStayConstraint).toBe(false);
        });
    });
    
    describe('EditConstraint', function() {
        it('should return the correct flags', function() {
            var variable = new Ext.casso.Variable(20);
            var constraint = new Ext.casso.EditConstraint(variable);
            expect(constraint.isEditConstraint).toBe(true);
            expect(constraint.isInequality).toBe(false);
            expect(constraint.isStayConstraint).toBe(false);
        });
    });
    
    describe('StayConstraint', function() {
        it('should return the correct flags', function() {
            var variable = new Ext.casso.Variable(20);
            var constraint = new Ext.casso.StayConstraint(variable);
            expect(constraint.isEditConstraint).toBe(false);
            expect(constraint.isInequality).toBe(false);
            expect(constraint.isStayConstraint).toBe(true);
        });
    });
});