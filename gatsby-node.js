const path = require("path")

// Cuando se creen todos los nodos al iniciar el servidor
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // Identificar solo los nodos de tipo Markdown
  if (node.internal.type === "MarkdownRemark") {
    // Obtener el slug del archivo markdown utilizando build-in method de path
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // Crear campo adicional (slug) al nodo de tipo Markdown
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
