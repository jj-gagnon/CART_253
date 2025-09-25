/**
 * CART 253
 * JJ Gagnon
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/



let radius
let circle_x
let circle_y
let speed
let border
let angle 

function setup() {
    radius = 150
    speed = 8
    border = radius
    angle = 0
    
    createCanvas(windowWidth, windowHeight)
    
    background(0,0,0)
    fill(255,255,255)
    strokeWeight(3)
    
    
    circle_x = width/2
    circle_y = height/2
    
}




function draw() {
    
    
    

    if (dist(circle_x, circle_y, mouseX, mouseY) < radius/2){
        angle = atan2(circle_y - mouseY,  circle_x - mouseX)


        circle_x = constrain(circle_x + cos(angle) * speed, border, width - border)
        
        circle_y = constrain(circle_y + sin(angle) * speed, border, height - border)


        
    }
    
    circle(circle_x, circle_y, radius)
    


}