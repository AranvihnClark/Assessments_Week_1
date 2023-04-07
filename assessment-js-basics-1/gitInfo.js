/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 1-----------------------");
console.log("--------------------------------------------------------\n");

let gitDefinition = "Git is a software app that is known as a version control system. It creates local repositories of whatever work you have designated and keeps multiple version of that work as you continue to update it. This is to help ensure that rolling back to a previous version is done as seamlessly as possible when something breaks after you have committed the next iteration of the repository. As such, Git makes it easy for multiple collaboraters to work on a single project/repository without work getting lost and recovering old iterations if needed by making it easy to track the changes."

console.log(`${gitDefinition}\n`);

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 2-----------------------");
console.log("--------------------------------------------------------\n");

let gitHubDefinition = "GitHub is a cloud based website application that acts as an interface for the repositories you have copied over from your local repositories. In this sense, GitHub is merely another source of your local repositories, should you deem fit to put them there. In the same way you can push your local repositories onto GitHub's cloud, you can also push GitHub's cloud repositories onto your local machine and save it as local repository as well."

console.log(`${gitHubDefinition}\n`);

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 3-----------------------");
console.log("--------------------------------------------------------\n");

const gitInitDefinition = "'git init' is a method to call upon the Git software to initalize a directory on your local machine as a repository, thus starting the first iteration the work contained in that folder and future folders inside of it.";

console.log(`${gitInitDefinition}\n`);

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 4-----------------------");
console.log("--------------------------------------------------------\n");

const gitCloneDefinition = "As mentioned at the end of the last paragraph, GitHub has the ability to push their cloud files onto Git's local directories and creating local repositories in effect. This is done via the 'git clone' command.";

console.log(`${gitCloneDefinition}\n`);

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 5-----------------------");
console.log("--------------------------------------------------------\n");

const gitStatusDefinition = "The 'git status' command allows its user to view if any changes have been made to the repository (done via 'git add'). If a new iteration has been updated and added onto the repository, but hasn't been commited yet, the 'git status' command will let the user know that there are commits that need to be completed.";

console.log(`${gitStatusDefinition}\n`);
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 6-----------------------");
console.log("--------------------------------------------------------\n");

const gitAddDefinition = "'git add' essentially adds files that have been modified into a tracking list (which can be viewed with 'git status'). Doing this does not save a snapshot of the files, thus creating a new iteration in the repository. This only lets the files to be tracked for committing.";

console.log(`${gitAddDefinition}\n`);

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 7-----------------------");
console.log("--------------------------------------------------------\n");

const gitCommitDefinition = "The 'git commit' command tells Git to save a snapshot of the repository, thus creating a new version of the project.";

console.log(`${gitCommitDefinition}\n`);

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
console.log("--------------------------------------------------------");
console.log("-----------------------Problem 8-----------------------");
console.log("--------------------------------------------------------\n");

const gitPushDefinition = "The 'git push' command allows for you to copy the the entire local repository onto GitHub's cloud repositories (or the changes to a local repository onto GitHub if it has been pushed previously).";

console.log(`${gitPushDefinition}\n`);