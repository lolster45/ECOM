//Styles...
import "../styles/AboutUs.scss"

const AboutPage = () => {
    return (
        <section className="about-us-page">
            <div>
                <h2>About Us</h2>
                <img src={new URL("https://burst.shopifycdn.com/photos/business-team-meeting-boardroom.jpg?width=1200&format=pjpg&exif=1&iptc=1")} alt="about us image"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus voluptatibus quam dolor nihil itaque optio similique sint sunt ab expedita, doloribus laboriosam vel animi voluptatem eius dolorum odit officia ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ea amet illo hic, quaerat at praesentium. Dolore, accusantium. Dicta sint illo ullam aliquam sapiente, laboriosam asperiores nemo quisquam temporibus sit!</p>
            </div>
        </section>
    )
}

export default AboutPage