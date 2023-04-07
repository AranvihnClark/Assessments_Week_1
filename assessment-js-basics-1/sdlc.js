// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Planning
// Analysis of Requirements
// Design
// Implementation
// Testing & Integration
// Maintain


//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added.";

const analysisOfRequirements = "This the second step, where you will determine what business rules and data models you will use for the duration of the project. This also includes what sort of system/software you will need to have and/or use, costs, and timeline (if applicable). And, of course, we include the requirements that the customer this software will end up going to needs as well.";

const design = "The third step is designing the software - which basically means figuring out how to complete what was discussed in the planing stage, both in a theoretical sense and a physical sense - where they put ideas into shape.";

const implementation = "The fourth step here can begin once the design is complete. This process is mainly coding the actual software.";

const testingAndIntegration = "We are now at the fifth step. Here, we test the end product of our software and deal with any bugs or unexpected results before shifting the product to the customers/consumers. We can only move the development further once it has met the previously noted requirements.";

const maintain = "This is the sixth and final step. With this, we conclude our project - with the only thing remaining being to maintain the software. These people take in unexpected results from the software from customer/consumer use and bring about what is usually known as bug fixes and updates to the software."

console.log(`${planning}\n`);
console.log(`${analysisOfRequirements}\n`);
console.log(`${design}\n`);
console.log(`${implementation}\n`);
console.log(`${testingAndIntegration}\n`);
console.log(`${maintain}\n`);