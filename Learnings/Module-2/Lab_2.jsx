import { useState } from "react";

export default function Lab_2() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard(event){
    event.preventDefault();
    setGiftCard(prevState => { 
        return {...prevState, instructions:"Please visit our restaurant to renew your gift card.",text:"coupan availed sucessfully!!"} 
    });
    btn.style.display="none";
    text.style.color="green";
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3 id="text" >
        {giftCard.text}
      </h3>
      <h2>
        {giftCard.instructions}
      </h2>
      {
        giftCard.valid && (
          <button id="btn" onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}
