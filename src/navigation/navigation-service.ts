import {
  createNavigationContainerRef,
  //   useNavigation,
} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

const navigationRef = createNavigationContainerRef<RootStackParamList>();
// const navigation = useNavigation();

function navigate<RouteName extends keyof RootStackParamList>(
  name: any,
  params?: RootStackParamList[RouteName] | any,
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

// function replace(){
//     if(navigationRef.isReady()){
//         navigationReplace.navigate
//     }
// }

export default {navigate, navigationRef, goBack};
