import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-chapter',
  standalone: true,
  imports: [],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChapterComponent {

}
