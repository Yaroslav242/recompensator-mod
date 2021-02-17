const liquidCapsuleSlag = extend(ArtilleryBulletType, {
	hit(b){
		Puddles.deposit(Vars.world.tileWorld(b.x, b.y), Liquids.slag, 40);
		this.super$hit(b,b.x,b.y);
	}
});
liquidCapsuleSlag.hitEffect = Fx.flakExplosion;
liquidCapsuleSlag.lifetime = 80;
liquidCapsuleSlag.width = 15;
liquidCapsuleSlag.height = 15;
liquidCapsuleSlag.collidesTiles = false;
liquidCapsuleSlag.splashDamageRadius = 25;
liquidCapsuleSlag.splashDamage = 66;
liquidCapsuleSlag.speed = 4.5;
liquidCapsuleSlag.frontColor = Pal.lightishOrange;
liquidCapsuleSlag.backColor = Pal.lightOrange;
liquidCapsuleSlag.ammoMultiplier = 0.3;
liquidCapsuleSlag.incendChance = 1;
liquidCapsuleSlag.incendAmount = 3;
liquidCapsuleSlag.incendSpread = 10;


const liquidCapsuleOil = extend(ArtilleryBulletType, {
	hit(b){
		Puddles.deposit(Vars.world.tileWorld(b.x, b.y), Liquids.oil, 40);
		this.super$hit(b,b.x,b.y);
	}
});
liquidCapsuleOil.hitEffect = Fx.flakExplosion;
liquidCapsuleOil.lifetime = 80;
liquidCapsuleOil.width = 15;
liquidCapsuleOil.height = 15;
liquidCapsuleOil.collidesTiles = false;
liquidCapsuleOil.splashDamageRadius = 25;
liquidCapsuleOil.splashDamage = 33;
liquidCapsuleOil.speed = 4.5;
liquidCapsuleOil.frontColor = Color.valueOf("313131");
liquidCapsuleOil.ammoMultiplier = 0.3;
liquidCapsuleOil.status = StatusEffects.tarred;
liquidCapsuleOil.statusDuration = 60 * 2;


const liquidCapsuleWater= extend(ArtilleryBulletType, {
	hit(b){
		Puddles.deposit(Vars.world.tileWorld(b.x, b.y), Liquids.water, 40);
		this.super$hit(b,b.x,b.y);
	}
});
liquidCapsuleWater.hitEffect = Fx.flakExplosionBig;
liquidCapsuleWater.lifetime = 80;
liquidCapsuleWater.width = 15;
liquidCapsuleWater.height = 15;
liquidCapsuleWater.collidesTiles = false;
liquidCapsuleWater.splashDamageRadius = 35;
liquidCapsuleWater.splashDamage = 33;
liquidCapsuleWater.speed = 4.5;
liquidCapsuleWater.frontColor = Color.valueOf("596ab8");
liquidCapsuleWater.backColor = Color.valueOf("4aa2b8");
liquidCapsuleWater.ammoMultiplier = 0.15;
liquidCapsuleWater.status = StatusEffects.wet;
liquidCapsuleWater.statusDuration = 60 * 2;

const liquidCapsuleCryo = extend(ArtilleryBulletType, {
	hit(b){
		Puddles.deposit(Vars.world.tileWorld(b.x, b.y), Liquids.cryofluid, 40);
		this.super$hit(b,b.x,b.y);
	}
});
liquidCapsuleCryo.hitEffect = Fx.flakExplosion;
liquidCapsuleCryo.lifetime = 80;
liquidCapsuleCryo.width = 15;
liquidCapsuleCryo.height = 15;
liquidCapsuleCryo.collidesTiles = false;
liquidCapsuleCryo.splashDamageRadius = 25;
liquidCapsuleCryo.splashDamage = 33;
liquidCapsuleCryo.speed = 4.5;
liquidCapsuleCryo.frontColor = Color.valueOf("6ecdec");
liquidCapsuleCryo.backColor = Color.valueOf("6ecdec");
liquidCapsuleCryo.ammoMultiplier = 0.3;
liquidCapsuleCryo.status = StatusEffects.freezing;
liquidCapsuleCryo.statusDuration = 60 * 4;

const recompensator = extend(LiquidTurret, "recompensator", {});
recompensator.health = 2250;
recompensator.size = 3;
recompensator.rotateSpeed = 3.5;
recompensator.reloadTime = 35;
recompensator.shootShake = 2;
recompensator.recoil = 4;
recompensator.range = 290;
recompensator.targetAir = false;
recompensator.targetGround = true;
recompensator.liquidCapacity = 20;
recompensator.shootSound = Sounds.shootBig;
recompensator.loopSound = Sounds.hum;
recompensator.extinguish = false;
recompensator.localizedName = "Recompensator";
recompensator.description = "Launch THICC projectiles and spill juices all over your naughty enemies!";
recompensator.buildVisibility = BuildVisibility.shown;
recompensator.requirements = ItemStack.with(Items.titanium, 80, Items.silicon, 45, Items.plastanium, 65, Items.metaglass, 200);
recompensator.category = Category.turret;
recompensator.inaccuracy = 2;
recompensator.ammo(
    Liquids.slag, liquidCapsuleSlag,
    Liquids.water, liquidCapsuleWater, 
    Liquids.oil, liquidCapsuleOil, 
    Liquids.cryofluid, liquidCapsuleCryo, 
);