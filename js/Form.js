class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting1 = createElement('h2');
    this.greeting2 = createElement('h3');
    this.reset = createButton('Reset');
    var logoImage = 'images/logo.png';
    this.logo = createImg(logoImage);

  }
  hide(){
    this.greeting1.hide();
    this.greeting2.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){

    this.input.position(displayWidth/2 - 100 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 -50, displayHeight/2);
    this.reset.position(displayWidth-150,20);
    this.reset.class("customButton");
    this.button.class("customButton");
    this.input.class("customInput");

    this.logo.position(width /4, 10);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting1.html("Hello " + player.name);
      this.greeting1.position(displayWidth/2-70, displayHeight/4);
      this.greeting2.html("Waiting for other players to join...");
      this.greeting2.position(displayWidth/2 - 150, displayHeight/3);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      Player.updateCarsAtEnd(0);
      location.reload();
    });

  }
}
