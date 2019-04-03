import { trigger, state, style, transition, animate } from '@angular/animations';

export const liligoFlyInOut = [
    trigger('flyInOut', [
        state('1', style({ transform: 'translateX(0%)' })),
        transition('void => *', [
          style({ transform: 'translateX(-100%)' }),
          animate('350ms ease-in')
        ]),
        transition('* => void', [
          animate('450ms ease-out', style({ transform: 'translateX(100%)' }))
        ])
      ]),
];

