// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  reactNative: require("../assets/react-native.png"),
  reactNativeGithub: require("../assets/github.png"),
  reactNativeNpm: require("../assets/npm.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              React Native
            </Heading>
            <Heading size={2} fit caps textColor="white">
              Intro
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>@chentsulin</Text>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.reactNative.replace("/", "")} notes="You can even put notes on your slide. How awesome is that?" />
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Release</Heading>
            <Layout>
              <Fill>
                <Appear fid="1">
                  <Heading size={4} textColor="secondary" bgColor="white" margin={10}>
                    iOS<br /> 2015/01
                  </Heading>
                </Appear>
              </Fill>
              <Fill>
                <Appear fid="2">
                  <Heading size={4} textColor="secondary" bgColor="white" margin={10}>
                    Android<br /> 2015/09
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
            <Appear fid="3">
              <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">Now - 0.27.2</Text>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.reactNativeGithub.replace("/", "")} margin="0px auto" width="1024px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.reactNativeNpm.replace("/", "")} margin="0px auto 40px" height="593px"/>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} fit lineHeight={1} textColor="black">
              <Text>Who use React Native?</Text>
            </Heading>
            <List>
              <Appear><ListItem>Facebook Groups</ListItem></Appear>
              <Appear><ListItem>Facebook Ads Manager</ListItem></Appear>
              <Appear><ListItem>F8</ListItem></Appear>
              <Appear><ListItem>React Native Playground</ListItem></Appear>
              <Appear><ListItem>li.st</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              <Link href="https://facebook.github.io/react-native/showcase.html">Show Case</Link>
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Text textSize="3em" margin="25px">Setup</Text>
            <Layout>
              <Fill>
                <Heading size={4} textColor="secondary" bgColor="white" margin={10}>
                  iOS
                </Heading>
                <List>
                  <ListItem>Xcode >= 7</ListItem>
                </List>
              </Fill>
              <Fill>
                <Heading size={4} textColor="secondary" bgColor="white" margin={10}>
                  Android
                </Heading>
                 <List>
                  <ListItem>AVD (Android Virtual Device)</ListItem>
                  <ListItem>Android Studio</ListItem>
                  <ListItem>$ANDROID_HOME</ListItem>
                </List>
              </Fill>
            </Layout>
            <Text>See {" "}
              <Link href="https://facebook.github.io/react-native/docs/getting-started.html">
                docs - Getting Started
              </Link>
            </Text>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/codes/install-cli.example")}
            ranges={[
              { loc: [0, 1], title: "Install react-native-cli" }
            ]}
          />
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/codes/new-project.example")}
            ranges={[
              { loc: [0, 9], title: "Create a new Project" },
              { loc: [0, 2], note: "Create a react-native project using cli." },
              { loc: [3, 5], note: "Run on iOS." },
              { loc: [6, 9], note: "Run on Android." }
            ]}
          />
          <Slide transition={["zoom"]} bgColor="primary">
            <Text textSize="3em" margin="25px">Files</Text>
            <Layout>
              <Fill>
                <Heading size={4} textColor="secondary" bgColor="white" margin={10}>
                  iOS
                </Heading>
                <List>
                  <ListItem>ios/</ListItem>
                  <ListItem>index.ios.js</ListItem>
                </List>
              </Fill>
              <Fill>
                <Heading size={4} textColor="secondary" bgColor="white" margin={10}>
                  Android
                </Heading>
                 <List>
                  <ListItem>android/</ListItem>
                  <ListItem>index.android.js</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/codes/index.ios.example")}
            ranges={[
              { loc: [0, 55], title: "index.ios" },
              { loc: [6, 13], note: "import dependencies." },
              { loc: [14, 32], note: "App Component." },
              { loc: [33, 51], note: "create StyleSheet." },
              { loc: [52, 53], note: "register App." }
            ]}
          />
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} fit lineHeight={1} textColor="black">
              <Text>Style in React Native</Text>
            </Heading>
            <List>
              <Appear><ListItem>CSS in JS</ListItem></Appear>
              <Appear><ListItem>Flexbox</ListItem></Appear>
              <Appear><ListItem>
                Implemented via <Link href="https://github.com/facebook/css-layout">css-layout</Link>
              </ListItem></Appear>
              <Appear><ListItem>style props accept array</ListItem></Appear>
              <Appear><ListItem>style props falsy values</ListItem></Appear>
              <Appear><ListItem><Link href="https://facebook.github.io/react-native/docs/style.html">docs</Link></ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} lineHeight={1} textColor="black">
              <Text>StyleSheet</Text>
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codes/StyleSheet.example")}
              margin="20px auto"
              textSize="0.5em"
            />
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} fit lineHeight={1} textColor="black">
              <Text>Register App using AppRegistry.registerComponent</Text>
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codes/registerComponent.example")}
              margin="20px auto"
              textSize="0.8em"
            />
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} fit lineHeight={1} textColor="black">
              <Text>Third Party Components</Text>
              <Text>(2017 results for ‘react-native’ in npm)</Text>
            </Heading>
            <Layout>
              <Fill>
                <List>
                  <ListItem>
                    <Link href="https://github.com/mastermoo/react-native-action-button">react-native-action-button</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://github.com/FuYaoDe/react-native-app-intro">react-native-app-intro</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://github.com/react-native-fellowship/react-native-side-menu">react-native-side-menu</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://github.com/aakashns/react-native-dialogs">react-native-dialogs</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://github.com/FaridSafi/react-native-gifted-form">react-native-gifted-form</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://github.com/oblador/react-native-lightbox">react-native-lightbox</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://github.com/dancormier/react-native-swipeout">react-native-swipeout</Link>
                  </ListItem>
                </List>
              </Fill>
              <Fill>
                <List>
                  <ListItem>
                    <Link href="https://github.com/react-native-material-design/react-native-material-design">react-native-material-design</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://github.com/lwansbrough/react-native-camera">react-native-camera</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://github.com/brentvatne/react-native-video">react-native-video</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://github.com/maxs15/react-native-spinkit">react-native-spinkit</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://github.com/leecade/react-native-swiper">react-native-swiper</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://github.com/FaridSafi/react-native-gifted-messenger">react-native-gifted-messenger</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://github.com/marcshilling/react-native-image-picker">react-native-image-picker</Link>
                  </ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} fit lineHeight={1} textColor="black">
              <Text>Work together with Redux</Text>
            </Heading>
            <Text>See {" "}
              <Link href="https://github.com/chentsulin/react-native-counter-ios-android">
                react-native-counter-ios-android
              </Link>
            </Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="black">
              <Text textSize="0.8em">References</Text>
            </Heading>
            <List>
              <ListItem>
                <Link href="https://facebook.github.io/react-native/docs/getting-started.html
">Official Docs</Link>
              </ListItem>
              <ListItem>
                <Link href="http://reactnative.cn/docs/0.27/getting-started.html">簡中文件</Link>
              </ListItem>
              <ListItem>
                <Link href="">Awesome React Native</Link>
              </ListItem>
              <ListItem>
                <Link href="https://rnplay.org/">RN playground</Link>
              </ListItem>
              <ListItem>
                <Link href="http://microsoft.github.io/code-push/">Code Push</Link>
              </ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} fit lineHeight={1} textColor="black">
              <Text>Demo</Text>
            </Heading>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps size={1} textColor="tertiary">
              End
            </Heading>
            <Heading size={4} textColor="secondary">
              Thank you for listening!
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
