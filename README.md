# Serverless-DynamoDB-Table-NodeJS

# <sub> 1. Create a "frame" for the DynamoDB table </sub>
### <sub>I decided to use the Builder Pattern to create a "frame" for the table. There are about 20 possible parameters to consider when building a DynamoDB table so I wanted to design the build in such a way that the paramaters are organized and easily readable/understandable. </sub> 
### <sub> Building with this pattern, I also get flexibily and reusability. I can easily add or remove attributes, and configurations such as throughput, partition keys, etc.. as needed </sub> 

# <sub> 2. Build single responsibility function components  </sub>
### <sub> In this file, I decided write several small, single responsibility functions that will be used to build/design the components and attributes a table deployment would need </sub> 

 
# <sub> 3. Compile table attributes and components </sub>
### <sub> At this point, the table components and attributes a come togther in a clean, readable way to build the structure of what the table will look and how it'll operate based on the paramaters.</sub> 

   
# <sub> 4 & 5. Create the table by passing the structure and parameters to an async function  </sub>
### <sub> After the table design has been prepared, I pass that data into a "CreateNewTableInDynamoDB" funtion and export that function into a file (dynamodb.js) that contains basic decoupled functions for programatically interacting with a database such as "getUser".</sub> 

    
