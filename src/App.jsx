import Text from "./components/Text";
import Icon from "./components/Image"
import styles from "./styles/app.module.css"

const App = () => {
  return (
    <div className={styles.parent}>
      <Text></Text>
      <div className={styles.image}>
        <Icon></Icon>
      </div>
    </div>
  );
};
export default App;
