
export function checkCreditCard (cardnumber: any) {
  let ccErrorNo = 0;
  // Array to hold the permitted card characteristics
  // Define the cards we support. You may add addtional card types as follows.
  //  Name:         As in the selection box of the form - must be same as user's
  //  Length:       List of possible valid lengths of the card number for the card
  //  prefixes:     List of possible prefixes for the card
  //  checkdigit:   Boolean to say whether there is a check digit
  let cardname = '';
  let numberString = cardnumber.toString();
  let cards = [
    {
      name: "Visa", 
      length: "13,16", 
      prefixes: "4",
      checkdigit: true
    },
    {
      name: "MasterCard",
      length: "16",
      prefixes: "51,52,53,54,55",
      checkdigit: true
    },
    {
      name: "AmEx",
      length: "15",
      prefixes: "34,37",
      checkdigit: true
    },
    {
      name: "Discover",
      length: "16",
      prefixes: "6011,622,64,65",
      checkdigit: true
    },
    {
      name: "JCB",
      length: "16",
      prefixes: "35",
      checkdigit: true
    },
    {
      name: "Maestro",
      length: "12,13,14,15,16,18,19",
      prefixes: "5018,5020,5038,6304,6759,6761,6762,6763",
      checkdigit: true
    },
    {
      name: "VisaElectron",
      length: "16",
      prefixes: "4026,417500,4508,4844,4913,4917",
      checkdigit: true
    },
  ]
  for(let v = 0; v < cards.length;  v++){
    let pref = cards[v].prefixes.split(",");   
    for(let j = 0; j < pref.length ; j++){
      let exp = new RegExp ("^" + pref[j]);
      if (exp.test (numberString)) cardname = cards[v].name;
    }
  }
  // Establish card type
  let cardType = -1;
  for (let i=0; i<cards.length; i++) {
    // See if it is this card (ignoring the case of the string)
    if (cardname.toLowerCase () == cards[i].name.toLowerCase()) {
      cardType = i;
      break;
    }
  }
  // If card type not found, report an error
  if (cardType == -1) {
     ccErrorNo = 0;
     return {validCard: false, errorNumber: ccErrorNo};  
  }
  // Ensure that the user has provided a credit card number
  if (cardnumber.length == 0)  {
     ccErrorNo = 1;
     return {validCard: false, errorNumber: ccErrorNo};
  }
  // Now remove any spaces from the credit card number
  cardnumber = cardnumber.replace (/\s/g, "");
  // Check that the number is numeric
  let cardNo = cardnumber
  let cardexp = /^[0-9]{13,19}$/;
  if (!cardexp.exec(cardNo))  {
     ccErrorNo = 2;
     return {validCard: false, errorNumber: ccErrorNo};   
  }
  // Now check the modulus 10 check digit - if required
  if (cards[cardType].checkdigit) {
    let checksum = 0;                                  // running checksum total
    //@ts-ignore
    let mychar = "";                                   // next char to process
    let j = 1;                                         // takes value of 1 or 2
    // Process each digit one by one starting at the right
    let calc;
    for (let i = cardNo.length - 1; i >= 0; i--) {
      // Extract the next digit and multiply by 1 or 2 on alternative digits.
      calc = Number(cardNo.charAt(i)) * j;
      // If the result is in two digits add 1 to the checksum total
      if (calc > 9) {
        checksum = checksum + 1;
        calc = calc - 10;
      }
      // Add the units element to the checksum total
      checksum = checksum + calc;
      // Switch the value of j
      if (j ==1) {j = 2} else {j = 1};
    }
    // All done - if checksum is divisible by 10, it is a valid modulus 10.
    // If not, report an error.
    if (checksum % 10 != 0)  {
     ccErrorNo = 3;
     return {validCard: false, errorNumber: ccErrorNo};   
    }
  }  
  // Check it's not a spam number
  if (cardNo == '5490997771092064') { 
    ccErrorNo = 5;
    return {validCard: false, errorNumber: ccErrorNo};   
  }
  // The following are the card-specific checks we undertake.
  let LengthValid = false;
  let PrefixValid = false;
  //@ts-ignore
  let undefined; 
  // We use these for holding the valid lengths and prefixes of a card type
  let prefix = new Array ();
  let lengths = new Array ();
  // Load an array with the valid prefixes for this card
  prefix = cards[cardType].prefixes.split(",");   
  // Now see if any of them match what we have in the card number
  for ( let i=0; i<prefix.length; i++) {
    let exp = new RegExp ("^" + prefix[i]);
    if (exp.test (cardNo)) PrefixValid = true;
  }
  // If it isn't a valid prefix there's no point at looking at the length
  if (!PrefixValid) {
     ccErrorNo = 3;
     return {validCard: false, errorNumber: ccErrorNo};   
  } 
  // See if the length is valid for this card
  lengths = cards[cardType].length.split(",");
  for (let j=0; j<lengths.length; j++) {
    if (cardNo.length == lengths[j]) LengthValid = true;
  }
  // See if all is OK by seeing if the length was valid. We only check the length if all else was 
  // hunky dory.
  if (!LengthValid) {
     ccErrorNo = 4;
     return {validCard: false, errorNumber: ccErrorNo}; 
  };    
  // The credit card is in the required format.
  return {validCard: true, errorNumber: null}; 
}
