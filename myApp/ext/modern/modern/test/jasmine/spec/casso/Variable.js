Ext.require([
    'Ext.casso.AbstractVariable',
    'Ext.casso.Variable',
    'Ext.casso.DummyVariable',
    'Ext.casso.SlackVariable',
    'Ext.casso.ObjectiveVariable'
], function() {
    describe('Variables', function() {
        beforeEach(function() {
            Ext.casso.AbstractVariable.VariableCounter = 0;
        });
        
        describe('AbstractVariable', function() {
            it('should be able to create a variable passing a name and prefix', function() {
                var variable = new Ext.casso.AbstractVariable(20, 'test');

                expect(variable.name).toEqual('test20');
                expect(variable.hashCode).toEqual(1);
                expect(Ext.casso.AbstractVariable.VariableCounter).toEqual(1);
            });

            it('should be able to create a variable passing just a prefix', function() {
                var variable = new Ext.casso.AbstractVariable('test');
                expect(variable.name).toEqual('test1');
            });

            it('should be able to create a variable passing no arguments', function() {
                var variable = new Ext.casso.AbstractVariable();
                expect(variable.name).toEqual('v1');
            });

            it('should be register itself in the variable map', function() {
                var variable = new Ext.casso.AbstractVariable();
                expect(Ext.casso.Variables['v1']).toEqual(variable);
            });

            it('should allow for changing the name programmatically', function() {
                var variable = new Ext.casso.AbstractVariable();
                variable.setName('test');
                expect(variable.name).toEqual('test');
                expect(Ext.casso.Variables['v1']).toBeUndefined();
            });

            it('should return the proper name when calling getName', function() {
                var variable = new Ext.casso.AbstractVariable();
                variable.setName('test');
                expect(variable.getName()).toEqual('test');
            });

            it('should have all flag methods to be false', function() {
                var variable = new Ext.casso.AbstractVariable();

                expect(variable.isDummy).toEqual(false);
                expect(variable.isExternal).toEqual(false);
                expect(variable.isPivotable).toEqual(false);
                expect(variable.isRestricted).toEqual(false);
            });    
        });
        
        describe('Variable', function() {
            it('should be able to create a variable passing a prefix and value', function() {
                var variable = new Ext.casso.Variable('huh', 20);

                expect(variable.name).toEqual('huh1');
                expect(variable.value).toEqual(20);
                expect(variable.hashCode).toEqual(1);
                expect(Ext.casso.AbstractVariable.VariableCounter).toEqual(1);
            });
            
            it('should be able to create a variable passing just a value', function() {
                var variable = new Ext.casso.Variable(20);
                expect(variable.name).toEqual('v1');
                expect(variable.value).toEqual(20);
            });
            
            it('should be able to create a variable passing no arguments', function() {
                var variable = new Ext.casso.Variable();
                expect(variable.name).toEqual('v1');
                expect(variable.value).toEqual(0);
            });
            
            it('should change the value when calling changeValue', function() {
                var variable = new Ext.casso.Variable();
                variable.changeValue(20);
                expect(variable.value).toEqual(20);
            });
            
            it('should change the value when calling setValue', function() {
                var variable = new Ext.casso.Variable();
                variable.setValue(20);
                expect(variable.value).toEqual(20);
            });
            
            it('should return the correct value when calling getValue', function() {
                var variable = new Ext.casso.Variable();
                variable.changeValue(20);
                expect(variable.getValue()).toEqual(20);
            });
            
            it('should return all the correct flags', function() {
                var variable = new Ext.casso.SlackVariable();
                expect(variable.isDummy).toEqual(false);
                expect(variable.isRestricted).toEqual(true);
                expect(variable.isExternal).toEqual(false);
                expect(variable.isPivotable).toEqual(true);
            });
        });
        
        describe('DummyVariable', function() {
            it('should return all the correct flags', function() {
                var variable = new Ext.casso.DummyVariable();
                
                expect(variable.isDummy).toEqual(true);
                expect(variable.isRestricted).toEqual(true);
                expect(variable.isExternal).toEqual(false);
                expect(variable.isPivotable).toEqual(false);
            });    
        });
        
        describe('SlackVariable', function() {
            it('should return all the correct flags', function() {
                var variable = new Ext.casso.SlackVariable();
                expect(variable.isDummy).toEqual(false);
                expect(variable.isRestricted).toEqual(true);
                expect(variable.isExternal).toEqual(false);
                expect(variable.isPivotable).toEqual(true);
            });      
        });
        
        describe('ObjectiveVariable', function() {
            it('should return all the correct flags', function() {
                var variable = new Ext.casso.ObjectiveVariable();
                expect(variable.isDummy).toEqual(false);
                expect(variable.isRestricted).toEqual(false);
                expect(variable.isExternal).toEqual(false);
                expect(variable.isPivotable).toEqual(false);
            });      
        });
    });
});
