import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    public israelCapital: string = "Tel Aviv";
    public netherlandsCapital: string = "The Hague";
    public canadaCapital: string = "Toronto";
    public romaniaCapital: string = "Bratislava";
    public hungaryCapital: string = "Bratislava";
    public estoniaCapital: string = "Bratislava";
    public slovakiaCapital: string = "Bucharest";
    public ukFlag: string = "England";
    public ukraineFlag: string = "Slovakia";
    public faroeFlag: string = "Bouvet Island";
    public answers: string[] = [];
    public totalScore: number = 0;
    public msg: string = "";

    public initArray(): void {
        for (let i = 0; i < 10; i++) { // Number of questions=10
            this.answers[i] = "wrong";
        }
    }

    public checkAll(): void {
        this.initArray();
        if (this.israelCapital === "Jerusalem") {
            this.totalScore += 10;
            this.answers[0] = "correct";
        }
        if (this.netherlandsCapital === "Amsterdam") {
            this.totalScore += 10;
            this.answers[1] = "correct";
        }
        if (this.canadaCapital === "Ottawa") {
            this.totalScore += 10;
            this.answers[2] = "correct";
        }
        if (this.romaniaCapital === "Bucharest") {
            this.totalScore += 10;
            this.answers[3] = "correct";
        }
        if (this.hungaryCapital === "Budapest") {
            this.totalScore += 10;
            this.answers[4] = "correct";
        }
        if (this.estoniaCapital === "Tallinn") {
            this.totalScore += 10;
            this.answers[5] = "correct";
        }
        if (this.slovakiaCapital === "Bratislava") {
            this.totalScore += 10;
            this.answers[6] = "correct";
        }
        if (this.ukFlag === "United Kingdom") {
            this.totalScore += 10;
            this.answers[7] = "correct";
        }
        if (this.ukraineFlag === "Ukraine") {
            this.totalScore += 10;
            this.answers[8] = "correct";
        }
        if (this.faroeFlag === "Faroe Islands") {
            this.totalScore += 10;
            this.answers[9] = "correct";
        }
        this.msg += `Q1: ${this.answers[0]},  Q2: ${this.answers[1]}
Q3: ${this.answers[2]},  Q4: ${this.answers[3]}
Q5: ${this.answers[4]},  Q6: ${this.answers[5]}
Q7: ${this.answers[6]},  Q8: ${this.answers[7]}
Q9: ${this.answers[8]},  Q10: ${this.answers[9]}
Your score: ${this.totalScore}/100`;
        if (this.totalScore === 100) {
            this.msg += "   Very Good mate :)";
        }
        if (this.totalScore === 0) {
            this.msg += "   So sad lad :(";
        }
        alert(this.msg);
        this.resetAll();
    }

    public resetAll(): void {
        this.totalScore = 0;
        this.msg = "";
        this.initArray();
    }

    constructor() { }

    ngOnInit() {
    }




}
