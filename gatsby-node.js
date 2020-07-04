const path=require('path');
const _ =require('lodash') 
exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
      query {
        allMdx {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `);
   const tagGroups=await graphql(`
     query {
      allMdx(limit:2000){
        group(field: frontmatter___tags){
          fieldValue
        }
      }
     }
   `) 
   if(tagGroups.errors){
     reporter.panicOnBuild('error while running tags query')
   }
  
    if (result.errors) {
      reporter.panic('failed to create posts', result.errors);
    }
    const tagTemplate = path.resolve("src/templates/tags.js")
    const posts = result.data.allMdx.nodes;
    const tags=tagGroups.data.allMdx.group; 
    posts.forEach(post => {
      actions.createPage({
        path: post.frontmatter.slug,
        component: require.resolve('./src/templates/post.js'),
        context: {
          slug: post.frontmatter.slug,
        },
      });
    });
    tags.forEach(tag=>{
      actions.createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue
        }
      })
    })
  };