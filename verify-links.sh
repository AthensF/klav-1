#!/bin/bash

# Klaviyo Campaign Generator - Link Verification Script
# Verifies all navigation paths in the user flow

echo "🔍 Verifying navigation links in Klaviyo Campaign Generator..."
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

total_checks=0
passed_checks=0
failed_checks=0

# Function to check if a file exists
check_file() {
    local file=$1
    local description=$2
    total_checks=$((total_checks + 1))
    
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $description: $file"
        passed_checks=$((passed_checks + 1))
        return 0
    else
        echo -e "${RED}✗${NC} $description: $file ${RED}(NOT FOUND)${NC}"
        failed_checks=$((failed_checks + 1))
        return 1
    fi
}

# Function to check if a string exists in a file
check_link() {
    local file=$1
    local search_string=$2
    local description=$3
    total_checks=$((total_checks + 1))
    
    if grep -q "$search_string" "$file" 2>/dev/null; then
        echo -e "${GREEN}✓${NC} $description"
        passed_checks=$((passed_checks + 1))
        return 0
    else
        echo -e "${RED}✗${NC} $description ${RED}(LINK NOT FOUND)${NC}"
        failed_checks=$((failed_checks + 1))
        return 1
    fi
}

echo "📄 Checking file existence..."
echo "================================"
check_file "index.html" "Landing page"
check_file "public/2-klaviyo-agent-ui-animated.html" "Campaign builder (page 2)"
check_file "public/3-klaviyo-agent-ui-animated.html" "Campaign editor (page 3)"
check_file "public/4-klaviyo-confirmation.html" "Confirmation page (page 4)"
check_file "public/5-campaigns-dashboard.html" "Dashboard (page 5)"
echo ""

echo "🔗 Checking navigation links..."
echo "================================"
check_link "src/KlaviyoGenerator.tsx" "2-klaviyo-agent-ui-animated.html" "index.html → page 2"
check_link "public/2-klaviyo-agent-ui-animated.html" "3-klaviyo-agent-ui-animated.html" "page 2 → page 3"
check_link "public/3-klaviyo-agent-ui-animated.html" "4-klaviyo-confirmation.html" "page 3 → page 4"
check_link "public/4-klaviyo-confirmation.html" "5-campaigns-dashboard.html" "page 4 → page 5"
check_link "public/5-campaigns-dashboard.html" "/klav-1/index.html" "page 5 → index.html"
echo ""

echo "🎨 Checking key features..."
echo "================================"
check_link "public/2-klaviyo-agent-ui-animated.html" "knight-rider" "Page 2: Knight Rider animation"
check_link "public/3-klaviyo-agent-ui-animated.html" "knight-rider" "Page 3: Knight Rider animation"
check_link "public/3-klaviyo-agent-ui-animated.html" "accept-reject-dialogue" "Page 3: Accept/Reject dialogue"
check_link "public/3-klaviyo-agent-ui-animated.html" "modal-backdrop" "Page 3: Confirmation modal"
check_link "public/3-klaviyo-agent-ui-animated.html" "campaign-actions-footer" "Page 3: Sticky footer"
check_link "public/4-klaviyo-confirmation.html" "success-icon" "Page 4: Success animation"
check_link "public/5-campaigns-dashboard.html" "campaigns-table" "Page 5: Campaigns table"
echo ""

echo "📦 Checking source files..."
echo "================================"
check_file "src/KlaviyoGenerator.tsx" "Main React component (.tsx)"
check_file "src/App.tsx" "App wrapper (.tsx)"
check_file "src/main.tsx" "Entry point (.tsx)"

# Check that duplicates are removed
total_checks=$((total_checks + 3))
if [ ! -f "src/KlaviyoGenerator.js" ]; then
    echo -e "${GREEN}✓${NC} Duplicate removed: src/KlaviyoGenerator.js"
    passed_checks=$((passed_checks + 1))
else
    echo -e "${RED}✗${NC} Duplicate still exists: src/KlaviyoGenerator.js"
    failed_checks=$((failed_checks + 1))
fi

if [ ! -f "src/App.js" ]; then
    echo -e "${GREEN}✓${NC} Duplicate removed: src/App.js"
    passed_checks=$((passed_checks + 1))
else
    echo -e "${RED}✗${NC} Duplicate still exists: src/App.js"
    failed_checks=$((failed_checks + 1))
fi

if [ ! -f "klaviyo_generator.tsx" ]; then
    echo -e "${GREEN}✓${NC} Duplicate removed: klaviyo_generator.tsx"
    passed_checks=$((passed_checks + 1))
else
    echo -e "${RED}✗${NC} Duplicate still exists: klaviyo_generator.tsx"
    failed_checks=$((failed_checks + 1))
fi
echo ""

# Summary
echo "================================"
echo "📊 Verification Summary"
echo "================================"
echo -e "Total checks: ${YELLOW}$total_checks${NC}"
echo -e "Passed: ${GREEN}$passed_checks${NC}"
echo -e "Failed: ${RED}$failed_checks${NC}"
echo ""

if [ $failed_checks -eq 0 ]; then
    echo -e "${GREEN}✅ All checks passed! Project is clean and ready for deployment.${NC}"
    exit 0
else
    echo -e "${RED}❌ Some checks failed. Please review the errors above.${NC}"
    exit 1
fi
