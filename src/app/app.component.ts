import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    activeEmoji: String = '👍'; 
    emoji = ['🎉', '😍', '😜', '👍'];
    changeEmoji(){
        this.activeEmoji = this.emoji[Math.floor(Math.random()* this.emoji.length)]
    }
    
}