import Script from 'next/script'

function DonationButton() {
    return (
        <div>
            <div class="gfm-embed" data-url="https://www.gofundme.com/f/mutual-aid-monday-zero-deaths-from-exposure/widget/large"></div>
            <Script beforeInteractive src="../components/minif.js"></Script>
        </div>
    )
}
   
export default DonationButton