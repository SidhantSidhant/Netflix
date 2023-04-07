import { AfterViewInit, Component, DoCheck, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SendmsgService } from 'src/app/service/sendmsg.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit, AfterViewInit, DoCheck {
  inputValue !: string;
  
  constructor(private sendmsgservice : SendmsgService) { }

  ngDoCheck() {
    // console.log(this.inputValue);\
    this.sendmsgservice.sendMsg.next(this.inputValue)
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    // console.log(this.inputValue);
  }

}
