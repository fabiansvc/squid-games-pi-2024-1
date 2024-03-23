import { Center, Float, Html, Text, Text3D } from "@react-three/drei";

const WelcomeText = (props) => {
    const text = "Squid Games";

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.01}
            floatIntensity={0.5}
            floatingRange={[1, 2]}

        >
        <Center
            position={props.position}
        >
            <Text3D
                font={"/assets/fonts/SquidGamesFont.json"}
                bevelEnabled
                bevelSize={0.005}
                bevelThickness={0.01}
                height={0.1}
                //lineHeight={2}
                letterSpacing={0.05}
                size={0.2}
            >
                <meshNormalMaterial />
                {text}
            </Text3D>
        </Center>
        </Float>
        // <Float
        //     speed={1.5}
        //     rotationIntensity={0.01}
        //     floatIntensity={0.5}
        //     floatingRange={[1, 2]}

        // >
        //     <Text
        //         position={props.position}
        //         fontSize={0.3}
        //         color={"red"}
        //         textAlign="center"
        //         font="/assets/fonts/SquidGamesFont.ttf"
        //     >
        //         Squid Games
        //     </Text>
        // </Float>
        // <Html 
        //     position={props.position} 
        //     center
        //     distanceFactor={12}
        //     className="welcome-text"
        //     occlude
        //     >
        //     <h2>Squid Games</h2>
        // </Html>
    )
}
export default WelcomeText;
