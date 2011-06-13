WMHSim.faction.legion = WMHSim.faction.extend({
	/*
	 * properties
	 */ 
	name			: 'Legion',
	
	/*
	 * constructor
	 */
	init			: function() {
		this.addBeast('Carnivean',		WMHSim.faction.legion.carnivean);
		this.addBeast('Shredder',		WMHSim.faction.legion.shredder);
	}

	/*
	 * methods
	 */
});

WMHSim.faction.legion.carnivean = WMHSim.beast.extend({
	/*
	 * properties
	 */ 
	name			: 'Carnivean',
	stats			: {
		fury			: 4,
	
		mat				: 6,
		str				: 12,
	
		dmg				: 30,
		def				: 12,
		arm				: 18
	},	
	
	/*
	 * constructor
	 */ 
	init			: function(sim) {
		this.addWeapon(new WMHSim.weapon('Head', 		{pow : 6}));
		this.addWeapon(new WMHSim.weapon('Left claw', 	{pow : 4}));
		this.addWeapon(new WMHSim.weapon('Right claw',	{pow : 4}));
		
		this._super(sim);
	}
	
	/*
	 * methods
	 */
});

WMHSim.faction.legion.shredder = WMHSim.beast.extend({
	/*
	 * properties
	 */ 
	name			: 'Shredder',
	stats			: {
		fury			: 2,
	
		mat				: 7,
		str				: 7,
	
		dmg				: 14,
		def				: 13,
		arm				: 12
	},	
	
	/*
	 * constructor
	 */ 
	init			: function(sim) {
		this.addWeapon(new WMHSim.weapon('Bite', 		{pow : 4}));
		
		this._super(sim);
	}
	
	/*
	 * methods
	 */
});
