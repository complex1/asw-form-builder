export default {
  action_bar: {
    style: {
      textAlign: 'right',
      fontSize: '12px'
    },
    btn: [
      {
        text: 'Save',
        id: 'save_btn',
        style: {
          background: '#fd7e14',
          borderColor: '#fd7e14',
          color: '#ffffff'
        }
      }
    ]
  },
  body: {
    text: '',
    number: 0,
    textarea: '',
    checkbox: true,
    date: '',
    dropdown: '',
    multiselect: [],
    radio: ''
  },
  form_ele: {
    size: 16,
    direction: 'block',
    component: 'ele_container',
    elements: [
      {
        component: 'form_text',
        text: "<h1>Form Title</h1>"
      },
      {
        size: 16,
        direction: 'inline',
        component: 'ele_container',
        elements: [
          {
            component: 'input_text',
            label: 'Text Input',
            sublabel: '',
            imp: false,
            validation: 'return data',
            placeholder: '',
            block: true,
            key: 'text',
            value: ''
          },
          {
            component: 'input_number',
            label: 'Input Number',
            sublabel: '',
            imp: false,
            min: '',
            max: '',
            validation: 'return data',
            placeholder: '',
            block: true,
            key: 'number',
            value: ''
          }
        ]
      },
      {
        component: 'input_textarea',
        label: 'Input Text Area',
        sublabel: '',
        imp: false,
        validation: 'return data',
        placeholder: '',
        block: true,
        key: 'textarea',
        value: ''
      },
      {
        component: 'input_checkbox',
        label: 'Input Checkbox',
        sublabel: '',
        imp: false,
        validation: 'return data',
        key: 'checkbox',
        value: ''
      },
      {
        component: 'input_date',
        label: 'Input Date',
        sublabel: '',
        imp: false,
        validation: 'return data',
        block: true,
        key: 'date',
        value: []
      },
      {
        component: 'input_dropdown',
        label: 'Input Dropdown',
        sublabel: '',
        imp: false,
        validation: 'return data',
        block: true,
        options: ['abc', 'def', 'ghi', 'jkl'],
        key: 'dropdown',
        value: []
      },
      {
        component: 'input_multiselect',
        label: 'Input Multi Select',
        sublabel: '',
        imp: false,
        validation: 'return data',
        block: true,
        options: ['opt-1', 'opt-2', 'opt-3'],
        key: 'multiselect',
        value: []
      },
      {
        component: 'input_radio',
        label: 'Input Radio',
        sublabel: '',
        imp: false,
        validation: 'return data',
        block: true,
        options: ['opt-1', 'opt-2', 'opt-3'],
        key: 'radio',
        value: []
      }
    ]
  }
}