export default {
  blankForm: {
    action_bar: {
      style: {
        textAlign: 'right',
        fontSize: '12px'
      },
      btn: []
    },
    body: {},
    form_ele: {
      size: 16,
      direction: 'block',
      component: 'ele_container',
      elements: []
    }
  },
  action_btn: {
    text: 'Save',
    id: '',
    style: {
      background: '#fd7e14',
      borderColor: '#fd7e14',
      color: '#ffffff'
    }
  },
  ele_container: {
    size: 16,
    direction: 'block',
    component: 'ele_container',
    elements: []
  },
  form_text: {
    component: 'form_text',
    text: "<h1>shubham</h1>"
  },
  text: {
    component: 'input_text',
    label: 'label',
    sublabel: 'efrver erve',
    imp: false,
    validation: 'return data',
    placeholder: '',
    block: true,
    key: '',
    value: ''
  },
  textarea: {
    component: 'input_textarea',
    label: 'label',
    sublabel: 'efrver erve',
    imp: false,
    validation: 'return data',
    placeholder: '',
    block: true,
    key: '',
    value: ''
  },
  number: {
    component: 'input_number',
    label: 'label',
    sublabel: 'efrver erve',
    imp: false,
    min: '',
    max: '',
    validation: 'return data',
    placeholder: '',
    block: true,
    key: '',
    value: ''
  },
  checkbox: {
    component: 'input_checkbox',
    label: 'label',
    sublabel: '',
    imp: false,
    validation: 'return data',
    key: '',
    value: ''
  },
  date: {
    component: 'input_date',
    label: 'label',
    sublabel: '',
    imp: false,
    validation: 'return data',
    block: true,
    key: '',
    value: []
  },
  dropdown: {
    component: 'input_dropdown',
    label: 'label',
    sublabel: '',
    imp: false,
    validation: 'return data',
    block: true,
    options: ['abc', 'def', 'ghi', 'jkl'],
    key: '',
    value: []
  },
  multiselect: {
    component: 'input_multiselect',
    label: 'label',
    sublabel: '',
    imp: false,
    validation: 'return data',
    block: true,
    options: [],
    key: '',
    value: []
  },
  password: {
    component: 'input_password',
    label: 'label',
    sublabel: '',
    imp: false,
    validation: 'return data',
    placeholder: '',
    block: true,
    key: '',
    value: []
  },
  radio: {
    component: 'input_radio',
    label: 'label',
    sublabel: '',
    imp: false,
    validation: 'return data',
    block: true,
    options: [],
    key: '',
    value: []
  },
  time: {
    component: 'input_time',
    label: 'label',
    sublabel: '',
    imp: false,
    validation: 'return data',
    block: true,
    key: '',
    value: []
  }
}
