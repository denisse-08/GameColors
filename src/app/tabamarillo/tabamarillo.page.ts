import { Component } from '@angular/core';

@Component({
  selector: 'app-tabamarillo',
  templateUrl: './tabamarillo.page.html',
  styleUrls: ['./tabamarillo.page.scss'],
})
export class TabamarilloPage {
  showDraggedElementYellow: boolean = true;
  showDraggedElementPurple: boolean = true;
  showDraggedElementBrown: boolean = true;
  
  constructor() { }
  
  animals = [
    { name: 'León', color: 'amarillo', userInput: '', imageUrl: 'https://media.istockphoto.com/id/628034316/es/vector/historieta-lion-roaring.jpg?s=612x612&w=0&k=20&c=9dYWsao2nXpBjWs1_0NqtsOVFVyVLZnRHlZ2tUPZ22g=' },
    { name: 'Pescado', color: 'morado', userInput: '', imageUrl: 'https://img.freepik.com/vector-gratis/vinilo-pixerstick-lindo-pez-dibujos-animados-animales-marinos_1308-65996.jpg' },
    { name: 'Mono', color: 'cafe', userInput: '', imageUrl: 'https://i.pinimg.com/474x/19/76/cf/1976cf25985b5048bbd714a72d6916b3.jpg' },
  ];

  finishGame() {
    const correct = this.animals.every(animal => animal.userInput.toLowerCase() === animal.color.toLowerCase());
    if (correct) {
      alert('¡Felicidades! Has completado el juego.');
    } else {
      alert('Aún hay animales fuera de lugar. Continúa intentando.');
    }
  }

  onDragStart(event: any, color: string) {
    event.dataTransfer.setData('text/plain', color);
  }

  onDrop(event: any, animal: any) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text');
  const draggedColor = data.toLowerCase();
  animal.userInput = draggedColor;

  switch (draggedColor) {
    case 'amarillo':
      this.showDraggedElementYellow = false;
      break;
    case 'morado':
      this.showDraggedElementPurple = false;
      break;
    case 'cafe':
      this.showDraggedElementBrown = false;
      break;
    default:
      break;
  }
}

  checkColor(animal: any) {
    if (animal.userInput.trim().toLowerCase() === animal.color.toLowerCase()) {
    alert('¡Correcto!');
  } else {
    alert('Incorrecto. Inténtalo de nuevo.');
  }
  }

  onDragOver(event: any) {
    event.preventDefault();
  }
}
