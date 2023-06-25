import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/service/cards.service';
import { Card } from 'src/app/models/card.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  title = 'card';
  cards: Card[] = [];
  card: Card = {
    id: '',
    cardNumber: '',
    cardholderName: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: '',

  }

  constructor(private cardsService: CardsService){

  }
    ngOnInit(): void {
      this.getAllCards();
      
  
    }

    getAllCards(){
      this.cardsService.getAllCards()
      .subscribe(
        response =>{
          this.cards=response;
          this.card = {
            id:'',
            cardNumber:'',
            cardholderName:'',
            expiryMonth:'',
            expiryYear:'',
            cvc:'',
        
          }
        }
      )
    }





    onSubmit (){

      if(this.card.id === ''){
       this.cardsService.addCard(this.card)
       .subscribe(
         response =>{
           this.getAllCards();
           this.card = {
             id:'',
             cardNumber:'',
             cardholderName:'',
             expiryMonth:'',
             expiryYear:'',
             cvc:'',
         
           };
           
         }
       );
      }
      else{
       this.updateCard(this.card);
      }
   }
 

 deleteCard(id: string){
    this.cardsService.deleteCard(id)
    .subscribe(
      response =>{
        this.getAllCards();
      }
    )
  }


  populateForm(card: Card) {
    this.card = card;
  }
  updateCard(card: Card){
    this.cardsService.updateCard(card)
    .subscribe(
      response =>{
        this.getAllCards();
      }
    )
  }

}




  
