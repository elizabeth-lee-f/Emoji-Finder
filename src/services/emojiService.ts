export interface EmojiData {
  title: string;
  emoji: string;
  keywords: string;
}

const API_URL = '/api/emojis';

export const emojiService = {
  async getAll(): Promise<EmojiData[]> {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Ошибка сети');
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};