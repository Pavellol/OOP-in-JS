//Оружие
class Weapon{
    name;

    constructor(name){
        this.name = name;
    }     
}
//Ручное оружие
class MeleeWeapon extends Weapon{
    
    constructor(name, damage, weight){
        super(name);
        this.attributes = new WeaponAttributes(damage, weight);
    }
    
    Attack(){
        console.log( `${this.name} наносит ${this.attributes.damage} урона`);
    }
}
//Стреляющее оружие
class RangedWeapon extends Weapon{
    constructor(name, damage, weight, range, bullet){
        super(name);
        this.attributes = new WeaponAttributes(damage, weight);
        this.range = range;//дальность стрельбы
        this.bullet = bullet;
    }

    Shoot(){
        console.log(`${this.name} стреляет на дистанцию ${this.range} метров и снимает ${this.attributes.damage} жизней`);
        this.bullet.ArmorDamage();
    }
}
//Герой(Ближний бой, дальний бой)
class Solder{
    name

    constructor(name,weapon){
        this.name = name;
        this.weapon = weapon;        
    }

    Attack(){
        console.log(`${this.name}`)

        if(this.weapon instanceof MeleeWeapon){
            this.weapon.Attack();
        }
        else if(this.weapon instanceof RangedWeapon){
            
            this.weapon.Shoot();
        }        
    }
}
//Хар-ки оружия
class WeaponAttributes {
    damage
    wight

    constructor(damage, weight) {
      this.damage = damage;   // Урон
      this.wight = weight;   // Вес
    }
}
//Пробитие
class Bullet{
    
    #name
    #armorUnits
    
    constructor(name, armorUnits){
        this.#name = name;
        this.#armorUnits = armorUnits;
    }    
    
    ArmorDamage(){
        console.log( `${this.#name} наносит по броне ${this.#armorUnits} урона`)
    }
}
//простая пуля
class EasyPula extends Bullet{

    constructor(name,armorUnits){
        super(name, armorUnits)
    } 
}
//фугасная пуля
class FugasPula extends Bullet{

    constructor(name,armorUnits){
        super(name, armorUnits)
    } 
}

const eazyPula = new EasyPula("5.62 калибр", 10);
const fugasPula = new FugasPula("Малокалиберный фугансый снаряд", 15)

const avtomat = new RangedWeapon("Автомат", 30, 3.33, 100, eazyPula)
const mech = new MeleeWeapon("Меч", "50", "5кг")

const warrior = new Solder("Богатырь", mech);

const superSolder = new Solder("Пехотинец", avtomat);

warrior.Attack();
superSolder.Attack();