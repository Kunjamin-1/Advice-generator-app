let advice_url = "https://api.adviceslip.com/advice";
let advice_btn = document.querySelector(".roll-dice");
let advice_number = document.querySelector("span")
let advice_txt = document.querySelector("h1");

async function fetch_advice() {
    try {
        let urlResponse = await fetch(advice_url); 
        if (!urlResponse.ok) {
            throw new Error(`Error: ${urlResponse.status}`); 
        }
        let urlData = await urlResponse.json(); 
        return urlData;
    } catch (error) {
        console.error("Error fetching advice:", error.message); 
        return { slip: { advice: "Something went wrong. Please try again!" } }; 
    }
}
document.addEventListener("DOMContentLoaded",advice)
advice_btn.addEventListener("click", advice)

async function advice(){
    advice_txt.innerText = "Advice is loading..."
    let data_text = await fetch_advice();
    advice_number.innerText = data_text.slip.id
    advice_txt.innerText = data_text.slip.advice

}
