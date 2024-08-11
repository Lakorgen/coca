import JustValidate from 'just-validate';

export const useValidate = () => {
  const validation = new JustValidate('#myForm');

  validation
    .addField('#first-name', [
      {
        rule: 'required',
        errorMessage: 'First name is required',
      },
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'customRegexp',
        value: /^[A-Za-zА-Яа-яЁё\s]+$/,
        errorMessage: 'First name can only contain letters',
      },
    ])
    .addField('#last-name', [
      {
        rule: 'required',
        errorMessage: 'Last name is required',
      },
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'customRegexp',
        value: /^[A-Za-zА-Яа-яЁё\s]+$/,
        errorMessage: 'First name can only contain letters',
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Email is required',
      },
      {
        rule: 'email',
        errorMessage: 'Email is invalid!',
      },
    ])
    .addField('#phone', [
      {
        rule: 'required',
        errorMessage: 'Phone is required',
      },
      {
        rule: 'number',
        errorMessage: 'Only number',
      },
      {
        rule: 'minLength',
        value: 10,
      },
      {
        rule: 'maxLength',
        value: 12,
      },
    ])
    .addField('#message', [
      {
        rule: 'required',
        errorMessage: 'Message is required',
      },
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 250,
      },
    ]);
};
