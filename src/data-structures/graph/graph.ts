class Graph {
    adjList: {[vertex: string]: any[]};
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex: string) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }
    
    // undirected
    addEdge(vertexA: string, vertexB: string) {
        this.adjList[vertexA].push(vertexB);
        this.adjList[vertexB].push(vertexA);
    }

    removeEdge(vertexA: string, vertexB: string) {
        // const index = this.adjList[vertexA].findIndex(v => vertexB);
        // this.adjList[vertexA].splice(index, 1);
        this.adjList[vertexA] = this.adjList[vertexA].filter(v => v !== vertexB);
        this.adjList[vertexB] = this.adjList[vertexB].filter(v => v !== vertexA);
    }

    removeVertex(vertex: string) {
        const vertexList = this.adjList[vertex].pop();
        for (let edge in vertexList) {
            this.removeEdge(vertex, edge);
        }
        delete this.adjList[vertex];
    }
}

