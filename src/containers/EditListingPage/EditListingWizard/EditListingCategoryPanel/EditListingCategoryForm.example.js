/* eslint-disable no-console */
import EditListingCategoryForm from './EditListingCategoryForm';
import defaultConfig from '../../../../config/configDefault';

const selectableListingTypes = [
  {
    listingType: 'sell-bicycles',
    transactionProcessAlias: 'default-purchase/release-1',
    unitType: 'item',
  },
];

export const WithInitialValues = {
  component: EditListingCategoryForm,
  props: {
    formId: 'WithInitialValues',
    onSubmit: values => {
      console.log('Submit EditListingCategoryForm with (unformatted) values:', values);
    },
    saveActionMsg: 'Save description',
    disabled: false,
    ready: false,
    updated: false,
    updateInProgress: false,
    selectableListingTypes: selectableListingTypes,
    listingConfig: defaultConfig.listing,
    initialValues: {
      title: 'Listing',
      description: 'Lorem ipsum',
      listingType: 'sell-bicycles',
      transactionProcessAlias: 'default-purchase/release-1',
      unitType: 'item',
    },
  },
  group: 'page:EditListingPage',
};

const selectableListingTypes2 = [
  {
    listingType: 'rent-bicycles',
    transactionProcessAlias: 'default-booking/release-1',
    unitType: 'day',
  },
  {
    listingType: 'sell-bicycles',
    transactionProcessAlias: 'default-purchase/release-1',
    unitType: 'item',
  },
];

export const MultipleProcessInfos = {
  component: EditListingCategoryForm,
  props: {
    formId: 'MultipleProcessInfos',
    onSubmit: values => {
      console.log('Submit EditListingCategoryForm with (unformatted) values:', values);
    },
    saveActionMsg: 'Save description',
    disabled: false,
    ready: false,
    updated: false,
    updateInProgress: false,
    selectableListingTypes: selectableListingTypes2,
    listingConfig: defaultConfig.listing,
  },
  group: 'page:EditListingPage',
};
