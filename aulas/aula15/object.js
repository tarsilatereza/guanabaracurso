//OBJECT INLINE

let amigo = {nome: 'jose', sexo: 'masculino', peso: 85.4, engordar(p){console.log("engordou"); this.peso += p}}
amigo.engordar(2) // o número 2 substitui o parâmetro "p". valor de p + o peso.
console.log(amigo.peso);

//OBJECT IDENTED

let friend = {
	name: 'tarsila',
	sex: 'female',
	weight: 60,
	age: 16,
	attenuate(w){
		console.log("attenuated");
		this.weight -= w
	}
}
friend.attenuate(2)
console.log(friend.weight);
