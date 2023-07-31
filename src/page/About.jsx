import { heroImg } from "../assets/img";
import { CardExperience } from "../component/atomic";

const About = () => {
    return (
        <section className="about">
            {/* hero img */}
            <div className="hero-img">
                <img src={heroImg} alt="fadil Fahrudin" />
            </div>

            {/* about */}
            <div className="description">
                <h3 className="title">Hay There! 👋</h3>
                <p className="body-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, itaque. Asperiores voluptate molestias nemo reprehenderit, iure, hic inventore dolorum exercitationem eveniet, sunt veritatis? Accusantium eveniet labore fugit deleniti dignissimos placeat assumenda! Provident aspernatur repudiandae repellat dicta, tempore repellendus, aliquid, pariatur ab et deserunt dolores laudantium id debitis dolorum esse perferendis cumque! Voluptates a magni repellat hic iure veniam atque suscipit commodi. Repudiandae tenetur ut eius quia maiores illo hic facilis? Obcaecati, id autem placeat perferendis rerum harum ab laborum. Culpa, cum. Dolor provident dolore animi unde amet inventore aliquid fugiat at officia tenetur consectetur, odit quaerat facere eveniet in voluptas doloribus et consequuntur cumque molestiae, doloremque nihil aliquam ipsa magni? Unde velit molestiae, iusto, eos nemo harum ut alias praesentium laboriosam veniam necessitatibus? Deleniti error veritatis quae blanditiis reprehenderit consequatur a fugiat voluptate aliquam repudiandae. Cum, ex dicta necessitatibus perferendis consectetur cumque impedit excepturi quod soluta, illo debitis nobis in magni odit reprehenderit velit magnam similique voluptate consequuntur minima iusto accusantium quia rerum. Explicabo, laudantium eveniet ex itaque omnis vitae iusto corporis voluptates veniam dolorum delectus sed nemo id consectetur autem eius? Recusandae magnam sint fuga, architecto quisquam rerum, dicta eum quam labore harum fugiat ipsa velit, commodi beatae eaque.</p>
            </div>

            {/* experience */}
            <div className="experience">
                <h5>Work Experience</h5>
                <hr />
                <div className="wrapp-card-experience">
                    <CardExperience />
                    <CardExperience />
                    <CardExperience />
                    <CardExperience />
                </div>
            </div>
        </section>
    )
}

export default About;