<template>
  <div class="jobs-page">
    <!-- Header -->
    <header class="header">
      <button class="menu-btn">
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
      </button>
      <div class="logo">
        <svg viewBox="0 0 60 80" class="logo-icon">
          <path d="M30 0 L50 15 L50 45 L30 60 L10 45 L10 15 Z" fill="#4FC3F7" />
          <path d="M30 20 L40 27 L40 43 L30 50 L20 43 L20 27 Z" fill="#29B6F6" />
        </svg>
      </div>
    </header>

    <!-- Search Bar -->
    <div class="search-section">
      <div class="search-container">
        <button class="search-btn">بحث</button>
        <input 
          type="text" 
          class="search-input" 
          placeholder="إبحث عن وظيفة ...."
          dir="rtl"
        />
        <button class="search-icon-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Job Cards -->
    <div class="jobs-container">
      <!-- Job Card 1 -->
      <div class="job-card">
        <div class="card-content">
          <div class="job-info">
            <h3 class="job-title">
              دائرة الضمان: روحة تفقديد حساب المواطن والدعم الإضافي حتى 2026
            </h3>
            <div class="job-footer">
              <span class="job-date">2025-12-02</span>
              <button class="job-btn">وظائف شركات</button>
            </div>
          </div>
          <div class="job-logo">
            <div class="saudi-flag">
              <div class="flag-green">
                <svg viewBox="0 0 120 80" class="sword-icon">
                  <text x="60" y="35" text-anchor="middle" fill="white" font-size="16" font-family="Arial">
                    لا إله إلا الله
                  </text>
                  <text x="60" y="50" text-anchor="middle" fill="white" font-size="14" font-family="Arial">
                    محمد رسول الله
                  </text>
                  <line x1="20" y1="60" x2="100" y2="60" stroke="white" stroke-width="3"/>
                  <circle cx="30" cy="60" r="4" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Job Card 2 -->
      <div class="job-card">
        <div class="card-content">
          <div class="job-info">
            <h3 class="job-title">
              شركة تابي تعلن عن وظائف منتجة وتاتب تبدأ من 5000 وتصل ل 22500 ريال بالرياض
            </h3>
            <div class="job-footer">
              <span class="job-date">2025-12-02</span>
              <button class="job-btn">وظائف شركات</button>
            </div>
          </div>
          <div class="job-logo">
            <div class="tabby-logo">
              <span class="tabby-text">tabbyyyyyy</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Job Card 3 -->
      <div class="job-card">
        <div class="card-content">
          <div class="job-info">
            <h3 class="job-title">
              المركز الوطني لأبحاث الزراعة المستدامة يفتح باب التقديم لبوابة التدريب التعاوني
            </h3>
            <div class="job-footer">
              <span class="job-date">2025-12-02</span>
              <button class="job-btn">وظائف شركات</button>
            </div>
          </div>
          <div class="job-logo">
            <div class="istidama-logo">
              <svg viewBox="0 0 80 80" class="logo-svg">
                <circle cx="40" cy="40" r="35" fill="#FDD835"/>
                <circle cx="40" cy="40" r="25" fill="#7CB342"/>
                <circle cx="40" cy="40" r="15" fill="#FDD835"/>
              </svg>
              <span class="logo-text">استدامة</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.jobs-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Header */
.header {
  background: #3f51b5;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.menu-btn {
  background: #2c3e50;
  border: none;
  border-radius: 8px;
  padding: 0.75rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: all 0.3s ease;
}

.menu-btn:hover {
  background: #34495e;
  transform: scale(1.05);
}

.hamburger-line {
  width: 30px;
  height: 3px;
  background: white;
  border-radius: 2px;
}

.logo {
  width: 60px;
  height: 60px;
}

.logo-icon {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

/* Search Section */
.search-section {
  background: #2c2c2c;
  padding: 1.5rem;
}

.search-container {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.search-btn {
  background: #3f51b5;
  color: white;
  border: none;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 25px;
  margin: 4px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.search-btn:hover {
  background: #303f9f;
  transform: scale(1.02);
}

.search-input {
  flex: 1;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  outline: none;
  text-align: right;
  color: #999;
}

.search-input::placeholder {
  color: #bbb;
}

.search-icon-btn {
  background: transparent;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Jobs Container */
.jobs-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Job Card */
.job-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.job-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.card-content {
  display: flex;
  padding: 1.5rem;
  gap: 1.5rem;
  align-items: flex-start;
}

.job-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.job-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2c3e50;
  line-height: 1.6;
  text-align: right;
  direction: rtl;
}

.job-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.job-date {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}

.job-btn {
  background: #3f51b5;
  color: white;
  border: none;
  padding: 0.625rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.job-btn:hover {
  background: #303f9f;
  transform: scale(1.05);
}

/* Job Logos */
.job-logo {
  flex-shrink: 0;
}

.saudi-flag {
  width: 100px;
  height: 70px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.flag-green {
  width: 100%;
  height: 100%;
  background: #165d31;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sword-icon {
  width: 100%;
  height: 100%;
}

.tabby-logo {
  width: 100px;
  height: 70px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.tabby-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  font-family: 'Arial', sans-serif;
}

.istidama-logo {
  width: 100px;
  height: 70px;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
}

.logo-svg {
  width: 40px;
  height: 40px;
}

.logo-text {
  font-size: 0.75rem;
  font-weight: 600;
  color: #2c3e50;
}

/* Responsive Design */
@media (max-width: 768px) {
  .card-content {
    flex-direction: column-reverse;
    align-items: center;
  }

  .job-info {
    width: 100%;
  }

  .job-footer {
    flex-direction: column;
    align-items: flex-end;
  }

  .search-container {
    flex-direction: row-reverse;
  }
}
</style>
