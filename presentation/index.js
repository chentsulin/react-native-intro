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
  reactNative: require("../assets/react-native.png"),
  reactNativeGithub: require("../assets/github.png"),
  reactNativeNpm: require("../assets/npm.png"),
  redbox: require("../assets/redbox.png"),
  devOptions: require("../assets/devopts.png"),
  console: require("../assets/console.png"),
  pauseOnError: require("../assets/pause-on-error.png"),
  rnplay: require("../assets/rnplay.png"),
  rnplayApp: require("../assets/rnplay-app.png")
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
              <Appear><ListItem>style props accept falsy values</ListItem></Appear>
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
            <Heading size={3} lineHeight={1} textColor="black">
              <Text>Text Component</Text>
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codes/TextComponent.example")}
              margin="20px auto"
              textSize="0.8em"
            />
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} lineHeight={1} textColor="black">
              <Text>View Component</Text>
              <Text>(just like div, UIView)</Text>
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codes/ViewComponent.example")}
              margin="20px auto"
              textSize="0.8em"
            />
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} lineHeight={1} textColor="black">
              <Text textSize="1.5em">Debugging</Text>
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} lineHeight={1} textColor="black">
              <Text>When error thrown...</Text>
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/codes/render-error.example")}
              margin="20px auto"
              textSize="0.8em"
            />
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} lineHeight={1} textColor="black">
              <Text>Red Box</Text>
            </Heading>
            <Image src={images.redbox.replace("/", "")} margin="0px auto 40px" height="593px"/>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} lineHeight={1} textColor="black">
              <Text textSize="1em">Keymaps</Text>
            </Heading>
            <List>
              <ListItem>Cmd+R - Reload</ListItem>
              <ListItem>Cmd+D - Toggle development options</ListItem>
              <ListItem>Cmd+Ctrl+Z - Shaking device</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} lineHeight={1} textColor="black">
              <Text>Development Options</Text>
            </Heading>
            <Image src={images.devOptions.replace("/", "")} margin="0px auto 40px" height="593px"/>
          </Slide>
           <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} lineHeight={1} textColor="black">
              <Text textSize="1em">Remote JS Debugging (chrome v8)</Text>
            </Heading>
            <List>
              <ListItem>open http://localhost:8081/debugger-ui</ListItem>
              <ListItem>can print something to console</ListItem>
              <ListItem>can see thrown errors</ListItem>
              <ListItem>can pause on exceptions</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} lineHeight={1} textColor="black">
              <Text>Debugging Console</Text>
            </Heading>
            <Image src={images.console.replace("/", "")} margin="0px auto 40px" width="1024px"/>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} lineHeight={1} textColor="black">
              <Text>Pause on Exceptions</Text>
            </Heading>
            <Image src={images.pauseOnError.replace("/", "")} margin="0px auto 40px" width="1024px"/>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} fit lineHeight={1} textColor="black">
              <Text>Other bulit-in Components</Text>
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <iframe
              style={{width: "536px", height: "632px"}}
              src="https://appetize.io/embed/p8mafjj1hgkv96dcwgqr1qwppw?device= iphone6&amp;scale=100&amp;autoplay=true&amp;orientation=portrait&amp;deviceColor=black"
              frameBorder="0"
              scrolling="no"
              width="536px"
              height="632px"
            />
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} fit lineHeight={1} textColor="black">
              <Text>React Native Playground (https://rnplay.org)</Text>
            </Heading>
            <Image src={images.rnplay.replace("/", "")} margin="0px auto 40px" width="1024px"/>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} fit lineHeight={1} textColor="black">
              <Text>React Native Playground App</Text>
            </Heading>
            <Image src={images.rnplayApp.replace("/", "")} margin="0px auto 40px" width="1024px"/>
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
            <Heading size={3} lineHeight={1} textColor="black">
              <Text textSize="1.5em">Navigator</Text>
              <Text>(just like routing)</Text>
            </Heading>
            <List>
              <ListItem>
                <Link href="https://facebook.github.io/react-native/docs/navigator.html">Navigator</Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/exponentjs/ex-navigator">ex-navigator </Link>(built on top of Navigator)
              </ListItem>
              <ListItem>
                <Link href="https://github.com/ericvicenti/navigation-rfc">NavigationExperimental</Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/aksonov/react-native-router-flux">react-native-router-flux</Link>(built on top of NavigationExperimental)
              </ListItem>
              <ListItem>
                <Link href="https://github.com/exponentjs/ex-navigation">ex-navigation</Link> (built on top of NavigationExperimental)
              </ListItem>
            </List>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/codes/Navigator.example")}
            ranges={[
              { loc: [0, 20], title: "Navigator" },
              { loc: [1, 2], note: "Assign initial route." },
              { loc: [2, 3], note: "Render component by route." },
              { loc: [7, 11], note: "Push next route." },
              { loc: [14, 15], note: "Pop prev route." }
            ]}
          />
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
                <Link href="https://facebook.github.io/react-native/docs/getting-started.html">Official Docs</Link>
              </ListItem>
              <ListItem>
                <Link href="http://reactnative.cn/docs/0.27/getting-started.html">簡中文件</Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/jondot/awesome-react-native">Awesome React Native</Link>
              </ListItem>
              <ListItem>
                <Link href="https://rnplay.org/">RN playground</Link>
              </ListItem>
              <ListItem>
                <Link href="http://microsoft.github.io/code-push/">Code Push</Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/brentvatne/hard-react-native-problems">hard-react-native-problems</Link>
              </ListItem>
              <ListItem>
                <Link href="http://reactnative.cc/">React Native Newsletter</Link>
              </ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={3} lineHeight={1} textColor="black">
              <Text textSize="1.5em">Demo</Text>
            </Heading>
            <List>
              <ListItem>
                <Link href="https://github.com/facebook/react-native/tree/master/Examples/UIExplorer">UIExplorer</Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/facebook/react-native/tree/master/Examples/2048">2048</Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/facebook/react-native/tree/master/Examples/Movies">Movie</Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/fbsamples/f8app">f8app</Link>
              </ListItem>
            </List>
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
