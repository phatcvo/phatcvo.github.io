int inPin = 51; // the number of the input pin
int outPin = 2; // the number of the output pin
  
int counter = 0; // how many times we have seen new value
int reading; // the current value read from the input pin
int current_state = LOW; // the debounced input value
bool buttonPressed = false; // Flag to track button press
int buttonState = LOW;
int lastButtonState = LOW;

// the following variable is a long because the time, measured in milliseconds,
// will quickly become a bigger number than can be stored in an int.
long time = 0; // the last time the output pin was sampled
int debounce_count = 10; // number of millis/samples to consider before declaring a debounced input
  
void setup()
{
  pinMode(inPin, INPUT);
  pinMode(outPin, OUTPUT);
  digitalWrite(outPin, current_state); // setup the Output LED for initial state
}
  
  
void loop()
{
// If we have gone on to the next millisecond
if(millis() != time)
{
  reading = digitalRead(inPin);
    
  if(reading == current_state && counter > 0)
  {
    counter--;
  }
    if(reading != current_state)
    {
      counter++;
    }
    // If the Input has shown the same value for long enough let's switch it
    if(counter >= debounce_count)
    {
      counter = 0;
      current_state = reading;
      

      if (reading != lastButtonState) {
        // Update last button state
        lastButtonState = reading;

        // If button is pressed (change from HIGH to LOW)
        if (reading == LOW) {
          buttonPressed = !buttonPressed; // Toggle the button state
        }
      }
    }
    time = millis();
  }

  

  if (buttonPressed) {
    digitalWrite(outPin, current_state);
  } else {
    digitalWrite(outPin, ~current_state);
  }
}