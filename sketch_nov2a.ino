#include "Display.h"

const int PIN_LED1 = 4;
const int PIN_LED2 = 5;
const int PIN_LED3 = 6;
const int PIN_LED4 = 7;

const int TEMP_SENSOR = 15;

// LED states
bool led1_on = false;
bool led2_on = false;
bool led3_on = false;
bool led4_on = false;

// Timing variables
unsigned long start_time1 = 0;
unsigned long start_time2 = 0;
unsigned long start_time3 = 0;
unsigned long start_time4 = 0;

unsigned long last_toggle_time1 = 0;
unsigned long last_toggle_time2 = 0;
unsigned long last_toggle_time3 = 0;
unsigned long last_toggle_time4 = 0;

const unsigned long blink_interval = 500; // Interval for LED blink in milliseconds
const unsigned long delay_interval = 5000; // Initial delay before blinking starts
const int max_blinks = 3; // Number of blinks before turning off

int blink_count1 = 0;
int blink_count2 = 0;
int blink_count3 = 0;
int blink_count4 = 0;

void setup() {
    Serial.begin(9600);
    pinMode(PIN_LED1, OUTPUT);
    pinMode(PIN_LED2, OUTPUT);
    pinMode(PIN_LED3, OUTPUT);
    pinMode(PIN_LED4, OUTPUT);
}

void loop() {
    String cmd;
    if (Serial.available()) {
        cmd = Serial.readStringUntil('\n');

        // Start the timer and turn the LED on for each command
        if (cmd == "RedLedOn") {
            led1_on = true;
            start_time1 = millis();
            blink_count1 = 0;
            digitalWrite(PIN_LED1, HIGH); // Keep LED on initially
        } else if (cmd == "RedLedOff") {
            led1_on = false;
            digitalWrite(PIN_LED1, LOW);
        }

        if (cmd == "GreenLedOn") {
            led2_on = true;
            start_time2 = millis();
            blink_count2 = 0;
            digitalWrite(PIN_LED2, HIGH); // Keep LED on initially
        } else if (cmd == "GreenLedOff") {
            led2_on = false;
            digitalWrite(PIN_LED2, LOW);
        }

        if (cmd == "BlueLedOn") {
            led3_on = true;
            start_time3 = millis();
            blink_count3 = 0;
            digitalWrite(PIN_LED3, HIGH); // Keep LED on initially
        } else if (cmd == "BlueLedOff") {
            led3_on = false;
            digitalWrite(PIN_LED3, LOW);
        }

        if (cmd == "YellowLedOn") {
            led4_on = true;
            start_time4 = millis();
            blink_count4 = 0;
            digitalWrite(PIN_LED4, HIGH); // Keep LED on initially
        } else if (cmd == "YellowLedOff") {
            led4_on = false;
            digitalWrite(PIN_LED4, LOW);
        }
    }

    unsigned long current_time = millis();

    // Handle blinking for LED1 after initial delay and blink count
    if (led1_on && current_time - start_time1 >= delay_interval) {
        if (blink_count1 < max_blinks && current_time - last_toggle_time1 >= blink_interval) {
            digitalWrite(PIN_LED1, !digitalRead(PIN_LED1));
            last_toggle_time1 = current_time;
            if (digitalRead(PIN_LED1) == LOW) {  // Count only when LED turns off
                blink_count1++;
            }
        }
        if (blink_count1 >= max_blinks) {
            digitalWrite(PIN_LED1, LOW);
            led1_on = false;
        }
    }

    // Handle blinking for LED2 after initial delay and blink count
    if (led2_on && current_time - start_time2 >= delay_interval) {
        if (blink_count2 < max_blinks && current_time - last_toggle_time2 >= blink_interval) {
            digitalWrite(PIN_LED2, !digitalRead(PIN_LED2));
            last_toggle_time2 = current_time;
            if (digitalRead(PIN_LED2) == LOW) {
                blink_count2++;
            }
        }
        if (blink_count2 >= max_blinks) {
            digitalWrite(PIN_LED2, LOW);
            led2_on = false;
        }
    }

    // Handle blinking for LED3 after initial delay and blink count
    if (led3_on && current_time - start_time3 >= delay_interval) {
        if (blink_count3 < max_blinks && current_time - last_toggle_time3 >= blink_interval) {
            digitalWrite(PIN_LED3, !digitalRead(PIN_LED3));
            last_toggle_time3 = current_time;
            if (digitalRead(PIN_LED3) == LOW) {
                blink_count3++;
            }
        }
        if (blink_count3 >= max_blinks) {
            digitalWrite(PIN_LED3, LOW);
            led3_on = false;
        }
    }

    // Handle blinking for LED4 after initial delay and blink count
    if (led4_on && current_time - start_time4 >= delay_interval) {
        if (blink_count4 < max_blinks && current_time - last_toggle_time4 >= blink_interval) {
            digitalWrite(PIN_LED4, !digitalRead(PIN_LED4));
            last_toggle_time4 = current_time;
            if (digitalRead(PIN_LED4) == LOW) {
                blink_count4++;
            }
        }
        if (blink_count4 >= max_blinks) {
            digitalWrite(PIN_LED4, LOW);
            led4_on = false;
        }
    }
}
