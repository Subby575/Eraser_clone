import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Query to get teams
export const getTeam = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const result = await ctx.db.query('teams')
      .filter(q => q.eq(q.field('createdBy'), args.email))
      .collect();
    return result;
  }
});

// Mutation to create a new team
export const createTeam = mutation({
  args: { teamNAme: v.string(), createdBy: v.string() },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert('teams', args);
    return result;
  }
});

// Mutation to delete a team
export const deleteTeam = mutation({
  args: { _id: v.id("teams") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args._id);
  }
});
