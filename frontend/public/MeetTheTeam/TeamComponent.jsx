import HeadingComponent from "./HeadingComponent";
import RectangleProfile from "./Profile";
import Name from "./Name";
import Links from "./links";

export default function TeamComponent() {
    return (
        <>
            <HeadingComponent />
            <div className="profiles">
                <RectangleProfile name="Vijay Veerasekaran" />
                <RectangleProfile name="Vishnu Siddharth" />
                <RectangleProfile name="Vishwaa Arumugam" />
                <RectangleProfile name = "Vishal Prakash"/>
                <RectangleProfile  name = "Ranjith Srikanth"/> {/* Added fifth profile */}
            </div>

        </>
    )
}