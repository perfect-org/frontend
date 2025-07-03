export const questions = [
  {
    key: 'age',
    label: 'Ваш возраст',
    type: 'number',
    required: true,
  },
  {
    key: 'gender',
    label: 'Ваш пол',
    type: 'select',
    options: [
      { value: 'ANY', label: 'Не важно' },
      { value: 'MALE', label: 'Мужской' },
      { value: 'FEMALE', label: 'Женский' },
    ],
    required: true,
  },
  {
    key: 'physical_activity',
    label: 'Есть ли у вас регулярная физическая активность?',
    type: 'checkbox',
  },
  {
    key: 'water_activity',
    label: 'Пьёте ли вы 2л воды в день?',
    type: 'checkbox',
  },
  {
    key: 'smoking_activity',
    label: 'Вы курите?',
    type: 'checkbox',
  },
  {
    key: 'alcohol_activity',
    label: 'Вы употребляете алкоголь?',
    type: 'checkbox',
  },
  {
    key: 'computer_activity',
    label: 'Проводите ли вы много времени за компьютером?',
    type: 'checkbox',
  },
  {
    key: 'sport_activity',
    label: 'Занимаетесь ли вы какими-либо видами спорта?',
    type: 'checkbox',
  },
  {
    key: 'sleep_activity',
    label: 'Спите ли Вы регулярно минимум 8 часов?',
    type: 'checkbox',
  },
  {
    key: 'goal',
    label: 'Ваша цель',
    type: 'select',
    options: [],
    multiple: true,
  },
  {
    key: 'allergy',
    label: 'Есть ли у вас аллергии на определённые типы продуктов?',
    type: 'select',
    options: [],
    multiple: true,
  },
]
