import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Button} from '../../components';
import useColors from '../../hooks/useColors';
import {weatherRouteStack} from '../../navigators/NavigationRoutes';
import {removeDataStorage} from '../../utils/storage';

import {CitiesStored} from '../../shared/interfaces';

interface DeleteProps {
  cityStoreID?: number;
}

const DeleteButton: React.FC<DeleteProps> = ({cityStoreID}) => {
  const getThemeColors = useColors();
  const navigation = useNavigation<weatherRouteStack>();

  const deleteCityHandler = async () => {
    try {
      await removeDataStorage<CitiesStored>('@cities', cityStoreID, 'cityID');
      navigation.navigate('Cities', {removedCityID: cityStoreID});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button backgroundColor="transparent" mt="2px" onPress={deleteCityHandler}>
      <MaterialIcons
        name="delete"
        color={getThemeColors('redRibbon')}
        size={24}
      />
    </Button>
  );
};

export default DeleteButton;
