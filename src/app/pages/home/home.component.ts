import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Badge } from '../../common/components/badge/badge.component';
import { GlassCard } from '../../common/components/glass-card/glass-card.component';
import { Post } from '../../core/models/post.model';
import { PostService } from '../../core/services/post.service';
import { BlogPostCard } from '../../common/components/blog-post-card/blog-post-card.component';
import { SlicePipe } from '@angular/common';
import { CategoryCard } from '../../common/components/category-card/category-card.component';
import { SquareBlogCard } from '../../common/components/square-blog-card/square-blog-card.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, Badge, GlassCard, BlogPostCard, SlicePipe, CategoryCard, SquareBlogCard],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class Home {
  private postService = inject(PostService);
  posts: Post[] = this.postService.posts;

  getCategoryCount(category: string): number {
    return this.posts.filter((p) => p.category === category).length;
  }
}
