

export default function Donate(){
    return(
        <div className="text-center w-75 m-auto">
            <h1>Donate</h1>
            
            <p>Thank you for choosing to support Poo Haut Nkam Community of Georgia, Inc and welcome to our secure online donation page</p>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="business" value="H43HWMATQJCRW" />
                <input type="hidden" name="item_name" value="Pooh Haut-Nkam Cultural Association Georgia USA" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
            <h3>Thank you for your donation</h3>
        </div>
    )
}