// let x = "harry"
// let getdate = 06/02/2022
// let dx = Date.today()

// console.log(dx)
// let subdate = 26/12/2022

function AddOrSubractDays(startingDate, number, add) {
	if (add) {
	  return new Date(new Date().setDate(startingDate.getDate() + number));
	} else {
	  return new Date(new Date().setDate(startingDate.getDate() - number));
	}
  }
  
  console.log('Today : ' + new Date());
  console.log('Future : ' + AddOrSubractDays(new Date(), 5, true));
  console.log('Past : ' + AddOrSubractDays(new Date(), 5, false));