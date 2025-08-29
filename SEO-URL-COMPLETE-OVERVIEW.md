# TBGS BV - Complete SEO & URL Structure Overview

## 📋 **Project Overview**

**Company**: Totaal Bouw Groep Specialisten BV (TBGS BV)  
**Business**: Construction/Roofing company serving Netherlands & Belgium  
**Core Services**: Roof work (TDS), Chimney services (TSS), Maintenance (TOS), General construction (TBS)  
**Primary Goal**: Lead generation through local SEO and conversion optimization  

---

## 🎯 **SEO Strategy Summary**

### **Target Keywords (High Priority)**
- **Primary**: `daklekkage`, `onderhoud`, `renovatie`, `dakwerk`
- **Location-based**: `[service] [city]` combinations
- **Service-specific**: `plat dak specialist`, `schoorsteen onderhoud`
- **Urgency**: `spoed`, `24 uur`, `direct beschikbaar`

### **Geographic Targeting**
- **Netherlands**: Eindhoven region (Noord-Brabant)
- **Belgium**: Limburg province
- **Strategy**: Hyperlocal SEO with city-specific content

---

## 🌐 **Complete URL Structure**

### **🏠 Main Website Structure**

#### **Core Pages**
```
/ (Homepage - redirect based on authentication/location)
/totaal-dak-specialist (TDS - Red theme)
/totaal-schoorsteen-specialist (TSS - Blue theme)  
/totaal-onderhoud-specialist (TOS - Green theme)
/totaal-bouw-specialist (TBS - Orange theme)
/kennisbank (Knowledge base hub)
/gratis-offerte (Lead generation form)
/over-ons (About us)
/contact (Contact page)
/locaties (Main locations overview)
```

#### **Admin System**
```
/admin (Admin dashboard - JWT protected)
/kennisbank/:slug (Dynamic admin articles)
```

---

### **🇳🇱 Netherlands URL Structure**

#### **City Hub Pages** (Locatie Hubs)
```
/nl/eindhoven (Primary - Eindhoven hub)
/nl/nuenen (Nuenen hub)
/nl/veldhoven (Veldhoven hub) 
/nl/best (Best hub)
/nl/son-en-breugel (Son en Breugel hub)
/nl/geldrop (Geldrop hub)
/nl/mierlo (Mierlo hub)
/nl/waalre (Waalre hub)
```

#### **Service × Location Matrix** (80+ combinations implemented)
```
TEMPLATE: /nl/[city]/[service]

Eindhoven Services:
/nl/eindhoven/daklekkage ✅
/nl/eindhoven/renovatie ✅ 
/nl/eindhoven/onderhoud ✅

Veldhoven Services:
/nl/veldhoven/daklekkage ✅
/nl/veldhoven/renovatie ✅
/nl/veldhoven/onderhoud ✅

Best Services:
/nl/best/daklekkage ✅
/nl/best/renovatie ✅  
/nl/best/onderhoud ✅

Nuenen Services:
/nl/nuenen/daklekkage ✅
/nl/nuenen/renovatie ✅
/nl/nuenen/onderhoud ✅

Mierlo Services:
/nl/mierlo/daklekkage ✅
/nl/mierlo/renovatie ✅
/nl/mierlo/onderhoud ✅

[Additional cities follow same pattern]
```

#### **Specialist Location Pages**
```
/eindhoven/plat-dak-specialist
/nuenen/plat-dak-specialist  
/veldhoven/plat-dak-specialist
```

#### **Legacy URL Support** (SEO compatibility)
```
/nl/locaties/[city] → Redirects to /nl/[city]
```

---

### **🇧🇪 Belgium URL Structure**

#### **Regional Hub**
```
/be (Main Belgium landing)
/be/ (Alternative)
/be/limburg (Limburg region hub)
```

#### **City Hub Pages**
```
/be/lommel (Primary Belgium city)
/be/hamont (Hamont hub)
/be/hamont-achel (Hamont-Achel hub)
/be/retie (Retie hub)
/be/pelt (Pelt hub)
/be/sint-huibrechts-lille (Sint-Huibrechts-Lille hub)
/be/overpelt (Overpelt hub)
/be/neerpelt (Neerpelt hub)
```

#### **Legacy URL Support**
```
/be/locaties/[city] → Redirects to /be/[city]
```

---

### **📚 Knowledge Base (Kennisbank) Structure**

#### **Static Knowledge Articles**
```
/kennisbank/daklekkage-herkennen-voorkomen ✅
/kennisbank/energiebesparing-door-isolatie ✅
/kennisbank/jaarlijkse-schoorsteencontrole ✅
/kennisbank/patio-dak ✅
/kennisbank/terras-dak ✅
/kennisbank/schuin-dak ✅
/kennisbank/plat-dak ✅
/kennisbank/schilderwerken ✅
/kennisbank/regenpijp ✅
/kennisbank/dakgoot ✅
/kennisbank/gevellekkage ✅
/kennisbank/dakbedekking-materialen ✅
/kennisbank/dakpannen-welke-keus ✅
/kennisbank/lekkage-dakkapellen ✅
/kennisbank/dakkapel-renovatie ✅
/kennisbank/groendaken ✅ (High-end SEO content)
/kennisbank/zonnepanelen ✅ (High-end SEO content)
```

#### **Dynamic Admin Articles**
```
/kennisbank/:slug (Unlimited admin-created articles)
```

---

## 🎨 **Branding & Theme Strategy**

### **Service-Specific Themes**
```
TDS (Totaal Dak Specialist): RED theme
TSS (Totaal Schoorsteen Specialist): BLUE theme  
TOS (Totaal Onderhoud Specialist): GREEN theme
TBS (Totaal Bouw Specialist): ORANGE theme
```

### **Dual Header System**
- **Main Site Header**: TBGS branding with service navigation
- **Specialist Headers**: Individual branded headers for domain pointing strategy

### **Domain Strategy** (Future Implementation)
```
tds.nl → Points to /totaal-dak-specialist
tss.nl → Points to /totaal-schoorsteen-specialist  
tos.nl → Points to /totaal-onderhoud-specialist
tbs.nl → Points to /totaal-bouw-specialist
```

---

## 🔍 **SEO Implementation Details**

### **Technical SEO**
- ✅ **React SEO Head**: Dynamic titles, descriptions, schemas
- ✅ **Schema.org Markup**: LocalBusiness, service areas, geo-coordinates  
- ✅ **NAP Consistency**: Name, Address, Phone standardization
- ✅ **Google Maps Integration**: Location display and directions
- ✅ **Structured Data**: Rich snippets for services and reviews

### **On-Page SEO Elements**

#### **Page Title Patterns**
```
City Service: "[Service] [City] | TBGS - [Benefit/USP]"
Example: "Daklekkage Eindhoven | TBGS - 24/7 Spoedhulp"

City Hub: "[City] Dakwerk & Onderhoud | TBGS Specialisten"  
Example: "Eindhoven Dakwerk & Onderhoud | TBGS Specialisten"

Service Hub: "[Service] Specialist | TBGS - [Region]"
Example: "Totaal Dak Specialist | TBGS - Nederland & België"
```

#### **Meta Description Patterns**
```
City Service: "[Service] in [City]? ✓ [USP1] ✓ [USP2] ✓ [USP3]. [CTA]!"
Example: "Daklekkage in Eindhoven? ✓ 24/7 beschikbaar ✓ 25+ jaar ervaring ✓ Spoedhulp binnen 2 uur. Bel direct!"

Kennisbank: "[Article topic]. [Key benefit]. [Expert credential]. [Action]."
Example: "Groendaken expert gids. Extensief, intensief en sedum opties. TBGS 25+ jaar ervaring. Gratis advies!"
```

### **Local SEO Strategy**

#### **Geo-Targeting Elements**
- **City-specific content**: Local landmarks, municipal references
- **Regional service areas**: 25km radius mapping  
- **Local keywords**: Integration in content naturally
- **Opening hours**: Municipality-specific timing
- **Local phone numbers**: Regional contact integration

#### **Google Business Profile Integration**
- **Multiple locations**: Each service area represented
- **Review integration**: Google reviews displayed on-site
- **Service catalog**: Comprehensive GBP service listings
- **Hours & availability**: Real-time information
- **Image optimization**: Local service photos

### **Content Strategy**

#### **Service Page Content Structure**
1. **Hero Section**: Service + location + urgency
2. **Problem/Solution**: Local pain points addressed  
3. **Benefits Grid**: 6 key differentiators with icons
4. **FAQ Section**: 5 location-specific questions
5. **Local Trust Elements**: Reviews, certifications, guarantees
6. **CTA Integration**: Multiple conversion points

#### **Kennisbank SEO Content**
- **Expert Authority**: 25+ years experience highlighted
- **Problem-Solution Format**: Address specific user queries
- **Internal Linking**: Strategic connections between articles
- **Long-tail Keywords**: Specific technical terms included
- **Actionable Content**: Practical tips and checklists

---

## 📊 **Conversion Optimization**

### **Lead Generation Strategy**
- **Primary CTA**: "Gratis Offerte" (Free Quote)
- **Secondary CTA**: "WhatsApp Chat" 
- **Urgency Messaging**: "24 uur service", "Direct beschikbaar"
- **Trust Signals**: "25+ jaar ervaring", "ISO certificaat"
- **Risk Reversal**: "Gratis inspectie", "Geen verplichtingen"

### **Contact Standardization**
```
Display Phone: 040 202 67 44
WhatsApp: +31 6 14595142  
Message Template: "Hallo Team TBGS,"
Email: info@tbgs.nl
Address: Eindhoven, Nederland (Regional focus)
```

### **Modal & Form Strategy**
- **Contact Modal**: Global component across all pages
- **Multi-step Form**: Advanced offerte form with file upload
- **Smart Defaults**: Location-based pre-filling
- **Validation**: Real-time form validation
- **Success Flow**: Clear next steps after submission

---

## 🚀 **Phase Implementation Status**

### **✅ Phase 1 Complete: Foundation**
- Core website structure
- Service specialist pages  
- Admin content management system
- Basic location targeting

### **✅ Phase 2 Complete: Location Matrix**
- 80+ service-location combinations
- Comprehensive Netherlands coverage
- Belgium market entry pages
- URL structure optimization

### **🔄 Phase 3 In Progress: Content & SEO**
- High-end kennisbank articles (groendaken, zonnepanelen)
- Advanced local SEO optimization
- Google Business Profile integration
- Conversion rate optimization

### **📋 Phase 4 Planned: Advanced Features**
- Separate domain implementation
- Advanced lead scoring
- Marketing automation integration
- Performance analytics dashboard

---

## 📈 **Performance Metrics & Goals**

### **SEO Targets**
- **Primary Keywords**: Top 3 Google positions for "daklekkage [city]"
- **Long-tail Keywords**: Top 5 for service-location combinations  
- **Local Pack**: Appear in Google Local Pack for target services
- **Knowledge Panel**: TBGS entity recognition in Google

### **Conversion Goals**
- **Lead Generation**: 20% increase in qualified leads
- **Local Reach**: 80% of leads from target service areas
- **Cost Efficiency**: 30% reduction in cost per lead
- **User Experience**: <3 second page load, mobile optimization

### **Technical Performance**
- **Core Web Vitals**: All green scores
- **Mobile Optimization**: Perfect mobile experience
- **Loading Speed**: <2 seconds first contentful paint
- **SEO Score**: 95+ Lighthouse SEO score

---

## 🔧 **Technical Architecture**

### **Frontend Technology**
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (client-side routing)
- **Styling**: Tailwind CSS + shadcn/ui + Radix UI
- **State Management**: TanStack React Query
- **Build Tool**: Vite with HMR

### **Backend Architecture**
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ES modules)
- **Database**: PostgreSQL with Drizzle ORM
- **Email Service**: Gmail SMTP with attachments
- **File Upload**: Multer with validation

### **SEO Technical Implementation**
- **Dynamic Head Tags**: React Helmet Async
- **Schema.org**: JSON-LD structured data
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives
- **Canonical URLs**: Duplicate content prevention

---

## 🎯 **Future Roadmap**

### **Immediate Priorities (Q1 2025)**
1. **Advanced Analytics**: Goal tracking and conversion funnels
2. **A/B Testing**: CTA optimization and page variants
3. **Review Management**: Automated review collection system
4. **Advanced Filtering**: Service and location search enhancement

### **Medium-term Goals (Q2-Q3 2025)**
1. **Domain Strategy**: Implement specialist domain pointing
2. **Marketing Automation**: Lead nurturing sequences  
3. **Mobile App**: Progressive Web App development
4. **International Expansion**: Additional Belgium regions

### **Long-term Vision (Q4 2025+)**
1. **AI Integration**: Chatbot for initial customer queries
2. **Predictive Analytics**: Lead scoring and opportunity identification
3. **Platform Integration**: CRM and business management tools
4. **Franchise Model**: Scalable system for additional regions

---

## 📋 **Maintenance & Updates**

### **Regular SEO Tasks**
- **Monthly**: Keyword ranking monitoring
- **Quarterly**: Content gap analysis and new article creation
- **Bi-annually**: Technical SEO audit and optimization
- **Annually**: Complete strategy review and goal setting

### **Content Management**
- **Admin System**: JWT-authenticated content management
- **Version Control**: Git-based content versioning
- **Review Process**: Quality assurance for all new content
- **Performance Monitoring**: Page speed and conversion tracking

---

*Last Updated: January 29, 2025*  
*Document Version: 2.0*  
*Next Review: March 2025*