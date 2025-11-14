// Global chart color palette
const colors = {
    primary: '#3498db',
    success: '#2ecc71',
    warning: '#f1c40f',
    danger: '#e74c3c',
    info: '#1abc9c',
    purple: '#9b59b6',
    dark: '#2c3e50',
    orange: '#e67e22'
};

// Chart 0: Octopus Index
const octopusConfig = {
    type: 'line',
    data: {
        labels: [1975, 1985, 1995, 2005, 2015, 2025],
        datasets: [{
            label: 'Octopus Index (1975 = 1.0)',
            data: [1.00, 1.44, 1.90, 2.29, 2.68, 3.07],
            borderColor: '#e74c3c',
            backgroundColor: 'rgba(231, 76, 60, 0.25)',
            fill: true,
            borderWidth: 4,
            pointBackgroundColor: '#e74c3c',
            pointRadius: 8,
            pointHoverRadius: 10,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: { display: false },
            legend: { display: true },
            datalabels: {
                color: '#000',
                font: { weight: 'bold', size: 13 },
                anchor: 'top',
                align: 'top',
                offset: 10,
                formatter: function(value) {
                    return value.toFixed(2);
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Power Index (1.0 = 1975 Baseline)' },
                ticks: { stepSize: 0.5 }
            },
            x: {
                title: { display: true, text: 'Year' }
            }
        }
    }
};

// Chart 1: Total Federal Outlays / GDP
const chart1Config = {
    type: 'line',
    data: {
        labels: [1975, 1985, 1995, 2005, 2015, 2025],
        datasets: [{
            label: 'Outlays / GDP (%)',
            data: [21.8, 22.6, 21.0, 20.1, 20.5, 23.9],
            borderColor: '#e74c3c',
            backgroundColor: 'rgba(231,76,60,0.2)',
            fill: true,
            tension: 0.3,
            pointRadius: 6,
            pointHoverRadius: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: { display: false },
            datalabels: {
                color: '#000',
                font: { weight: 'bold', size: 13 },
                anchor: 'top',
                align: 'top',
                offset: 10,
                formatter: function(value) {
                    return value.toFixed(1) + '%';
                }
            }
        }
    }
};

// Chart 2: Direct Transfers to Individuals / GDP
const chart2Config = {
    type: 'bar',
    data: {
        labels: [1975, 1985, 1995, 2005, 2015, 2025],
        datasets: [
            { label: 'Social Security', data: [4.2, 4.8, 4.9, 4.8, 5.0, 5.5], backgroundColor: '#3498db' },
            { label: 'Medicare', data: [0.8, 1.5, 2.0, 2.5, 3.2, 4.0], backgroundColor: '#2ecc71' },
            { label: 'Medicaid + Others', data: [1.0, 1.7, 2.1, 2.7, 3.8, 5.5], backgroundColor: '#f1c40f' }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
            title: { display: false },
            datalabels: {
                color: '#000',
                font: { weight: 'bold', size: 12 },
                anchor: 'top',
                align: 'top',
                offset: 8,
                formatter: function(value) {
                    return value.toFixed(1);
                }
            }
        },
        scales: { x: { stacked: true }, y: { stacked: true } }
    }
};

// Chart 3: Pages in the Federal Register
const chart3Config = {
    type: 'bar',
    data: {
        labels: [1975, 1985, 1995, 2005, 2015, 2025],
        datasets: [{
            label: 'Pages (k)',
            data: [20, 50, 68, 74, 81, 90],
            backgroundColor: '#9b59b6'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
            title: { display: false },
            datalabels: {
                color: '#000',
                font: { weight: 'bold', size: 13 },
                anchor: 'top',
                align: 'top',
                offset: 8
            }
        }
    }
};

// Chart 4: Code of Federal Regulations (CFR) Pages
const chart4Config = {
    type: 'line',
    data: {
        labels: [1975, 1985, 1995, 2005, 2015, 2025],
        datasets: [{
            label: 'CFR Pages (k)',
            data: [70, 100, 135, 160, 180, 190],
            borderColor: '#e67e22',
            fill: false,
            pointRadius: 6,
            pointHoverRadius: 8,
            tension: 0.3,
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
            title: { display: false },
            datalabels: {
                color: '#000',
                font: { weight: 'bold', size: 13 },
                anchor: 'top',
                align: 'top',
                offset: 10
            }
        }
    }
};

// Chart 5: Restrictive Terms in CFR (RegData)
const chart5Config = {
    type: 'line',
    data: {
        labels: [1975, 1985, 1995, 2005, 2015, 2025],
        datasets: [{
            label: 'Restrictions (k)',
            data: [300, 450, 650, 850, 1000, 1100],
            borderColor: '#c0392b',
            backgroundColor: 'rgba(192,57,43,0.2)',
            fill: true,
            pointRadius: 6,
            pointHoverRadius: 8,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
            title: { display: false },
            datalabels: {
                color: '#000',
                font: { weight: 'bold', size: 13 },
                anchor: 'top',
                align: 'top',
                offset: 10,
                formatter: function(value) {
                    return value;
                }
            }
        }
    }
};

// Chart 6: Federal Civilian Employment (per 100k pop)
const chart6Config = {
    type: 'line',
    data: {
        labels: [1975, 1985, 1995, 2005, 2015, 2025],
        datasets: [{
            label: 'Employees per 100k Pop',
            data: [833, 840, 800, 750, 650, 590],
            borderColor: '#16a085',
            fill: false,
            pointRadius: 6,
            pointHoverRadius: 8,
            tension: 0.3,
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
            title: { display: false },
            datalabels: {
                color: '#000',
                font: { weight: 'bold', size: 13 },
                anchor: 'top',
                align: 'top',
                offset: 10
            }
        }
    }
};

// Chart 7: Federal vs Private Wage Premium
const chart7Config = {
    type: 'bar',
    data: {
        labels: [1975, 1985, 1995, 2005, 2015, 2025],
        datasets: [{ 
            label: 'Fed Premium (%)', 
            data: [30, 40, 50, 60, 65, 70], 
            backgroundColor: '#8e44ad' 
        }]
    },
    options: { 
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
            title: { display: false },
            legend: { display: false },
            datalabels: {
                color: '#000',
                font: { weight: 'bold', size: 13 },
                anchor: 'top',
                align: 'top',
                offset: 8,
                formatter: function(value) {
                    return value + '%';
                }
            }
        } 
    }
};

// Chart 8: Federal Assistance Programs
const chart8Config = {
    type: 'bar',
    data: {
        labels: [1975, 1985, 1995, 2005, 2015, 2025],
        datasets: [{ 
            label: 'Programs', 
            data: [400, 800, 1200, 1600, 2000, 2300], 
            backgroundColor: '#d35400' 
        }]
    },
    options: { 
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
            title: { display: false },
            legend: { display: false },
            datalabels: {
                color: '#000',
                font: { weight: 'bold', size: 13 },
                anchor: 'top',
                align: 'top',
                offset: 8
            }
        } 
    }
};

// Chart 9: Federal Grants to State/Local / GDP
const chart9Config = {
    type: 'line',
    data: {
        labels: [1975, 1985, 1995, 2005, 2015, 2025],
        datasets: [{
            label: 'Grants / GDP (%)',
            data: [1.5, 2.0, 2.5, 3.0, 3.5, 4.0],
            backgroundColor: 'rgba(52,152,219,0.4)',
            borderColor: '#3498db',
            fill: true,
            pointRadius: 6,
            pointHoverRadius: 8,
            tension: 0.3
        }]
    },
    options: { 
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
            title: { display: false },
            datalabels: {
                color: '#000',
                font: { weight: 'bold', size: 13 },
                anchor: 'top',
                align: 'top',
                offset: 10,
                formatter: function(value) {
                    return value.toFixed(1) + '%';
                }
            }
        } 
    }
};

// Chart 10: Federal Subsidies to Private Sector / GDP
const chart10Config = {
    type: 'bar',
    data: {
        labels: ['Energy', 'Agriculture', 'Housing', 'Credit', 'Other'],
        datasets: [{ 
            label: '% of GDP',
            data: [0.3, 0.3, 0.3, 0.2, 0.2], 
            backgroundColor: ['#1abc9c', '#f39c12', '#9b59b6', '#34495e', '#7f8c8d']
        }]
    },
    options: { 
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: { 
            title: { display: false },
            legend: { display: false },
            datalabels: {
                color: '#000',
                font: { weight: 'bold', size: 12 },
                anchor: 'end',
                align: 'end',
                offset: 8,
                formatter: function(value) {
                    return value.toFixed(1) + '%';
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 0.4,
                title: { display: true, text: '% of GDP ($345B total)', font: { weight: 'bold' } }
            },
            y: {
                title: { display: false }
            }
        }
    }
};

// Chart 11: Federal Criminal Statutes + Reg Crimes
const chart11Config = {
    type: 'bar',
    data: {
        labels: [1975, 1985, 1995, 2005, 2015, 2025],
        datasets: [
            { label: 'Statutes', data: [3000, 3500, 4000, 4500, 4800, 5000], backgroundColor: '#c0392b' },
            { label: 'Reg Crimes (k)', data: [100, 150, 200, 250, 280, 300], backgroundColor: '#e74c3c' }
        ]
    },
    options: { 
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
            title: { display: false },
            legend: { display: false },
            datalabels: {
                color: '#000',
                font: { weight: 'bold', size: 12 },
                anchor: 'top',
                align: 'top',
                offset: 8
            }
        } 
    }
};

// Chart 12: Lobbying Expenditures (Real $B)
const chart12Config = {
    type: 'line',
    data: {
        labels: [1975, 1985, 1995, 2005, 2015, 2025],
        datasets: [{
            label: 'Lobbying ($B, 2025 dollars)',
            data: [0.4, 1.0, 1.8, 2.5, 3.5, 4.2],
            borderColor: '#2c3e50',
            backgroundColor: 'rgba(44, 62, 80, 0.2)',
            fill: true,
            pointRadius: 6,
            pointHoverRadius: 8,
            tension: 0.3
        }]
    },
    options: { 
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
            title: { display: false },
            datalabels: {
                color: '#000',
                font: { weight: 'bold', size: 13 },
                anchor: 'top',
                align: 'top',
                offset: 10,
                formatter: function(value) {
                    return '$' + value.toFixed(1) + 'B';
                }
            }
        } 
    }
};

// Chart 13: Public Debt / GDP
const chart13Config = {
    type: 'line',
    data: {
        labels: [1975, 1985, 1995, 2005, 2015, 2025],
        datasets: [{
            label: 'Debt / GDP (%)',
            data: [32, 41, 65, 60, 73, 99],
            borderColor: '#e74c3c',
            backgroundColor: 'rgba(231,76,60,0.2)',
            fill: true,
            pointRadius: 6,
            pointHoverRadius: 8,
            tension: 0.3,
            borderWidth: 3
        }]
    },
    options: { 
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
            title: { display: false },
            datalabels: {
                color: '#000',
                font: { weight: 'bold', size: 13 },
                anchor: 'top',
                align: 'top',
                offset: 10,
                formatter: function(value) {
                    return value + '%';
                }
            }
        } 
    }
};

// Chart 14: Rules Costing >$100M (Major Rules)
const chart14Config = {
    type: 'bar',
    data: {
        labels: [1975, 1985, 1995, 2005, 2015, 2025],
        datasets: [{
            label: 'Major Rules',
            data: [50, 200, 500, 800, 1200, 2000],
            backgroundColor: '#e67e22'
        }]
    },
    options: { 
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
            title: { display: false },
            legend: { display: false },
            datalabels: {
                color: '#000',
                font: { weight: 'bold', size: 13 },
                anchor: 'top',
                align: 'top',
                offset: 8
            }
        } 
    }
};

// Chart 15: Government Dependency Index (GDI)
const chart15Config = {
    type: 'line',
    data: {
        labels: [1975, 1985, 1995, 2005, 2015, 2025],
        datasets: [{
            label: 'GDI (%)',
            data: [12, 16, 20, 24, 29, 33],
            borderColor: '#9b59b6',
            backgroundColor: 'rgba(155, 89, 182, 0.2)',
            fill: true,
            pointRadius: 6,
            pointHoverRadius: 8,
            tension: 0.3
        }]
    },
    options: { 
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
            title: { display: false },
            datalabels: {
                color: '#000',
                font: { weight: 'bold', size: 13 },
                anchor: 'top',
                align: 'top',
                offset: 10,
                formatter: function(value) {
                    return value + '%';
                }
            }
        } 
    }
};

// Initialize all charts when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Register the datalabels plugin
    Chart.register(ChartDataLabels);
    
    // Set default chart options
    if (Chart.defaults.plugins.legend && Chart.defaults.plugins.legend.labels) {
        Chart.defaults.plugins.legend.labels.usePointStyle = true;
    }

    const octopusCtx = document.getElementById('octopusChart').getContext('2d');
    new Chart(octopusCtx, octopusConfig);

    const chart1Ctx = document.getElementById('chart1Canvas').getContext('2d');
    new Chart(chart1Ctx, chart1Config);

    const chart2Ctx = document.getElementById('chart2Canvas').getContext('2d');
    new Chart(chart2Ctx, chart2Config);

    const chart3Ctx = document.getElementById('chart3Canvas').getContext('2d');
    new Chart(chart3Ctx, chart3Config);

    const chart4Ctx = document.getElementById('chart4Canvas').getContext('2d');
    new Chart(chart4Ctx, chart4Config);

    const chart5Ctx = document.getElementById('chart5Canvas').getContext('2d');
    new Chart(chart5Ctx, chart5Config);

    const chart6Ctx = document.getElementById('chart6Canvas').getContext('2d');
    new Chart(chart6Ctx, chart6Config);

    const chart7Ctx = document.getElementById('chart7Canvas').getContext('2d');
    new Chart(chart7Ctx, chart7Config);

    const chart8Ctx = document.getElementById('chart8Canvas').getContext('2d');
    new Chart(chart8Ctx, chart8Config);

    const chart9Ctx = document.getElementById('chart9Canvas').getContext('2d');
    new Chart(chart9Ctx, chart9Config);

    const chart10Ctx = document.getElementById('chart10Canvas').getContext('2d');
    new Chart(chart10Ctx, chart10Config);

    const chart11Ctx = document.getElementById('chart11Canvas').getContext('2d');
    new Chart(chart11Ctx, chart11Config);

    const chart12Ctx = document.getElementById('chart12Canvas').getContext('2d');
    new Chart(chart12Ctx, chart12Config);

    const chart13Ctx = document.getElementById('chart13Canvas').getContext('2d');
    new Chart(chart13Ctx, chart13Config);

    const chart14Ctx = document.getElementById('chart14Canvas').getContext('2d');
    new Chart(chart14Ctx, chart14Config);

    const chart15Ctx = document.getElementById('chart15Canvas').getContext('2d');
    new Chart(chart15Ctx, chart15Config);
});

// Navigation scroll function
function scrollToChart(chartId) {
    const element = document.getElementById(chartId);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Update active nav button
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Copy to Clipboard function - copies both chart image and text
function copyToClipboard(sectionId, buttonElement) {
    const section = document.getElementById(sectionId);
    if (!section) {
        alert('Section not found');
        return;
    }

    // Find the canvas element (chart)
    const canvas = section.querySelector('canvas');
    if (!canvas) {
        alert('Chart not found');
        return;
    }

    // Extract title
    const titleElement = section.querySelector('.chart-title');
    const title = titleElement ? titleElement.textContent.trim() : '';

    // Extract description
    const descriptionElement = section.querySelector('.chart-description');
    const description = descriptionElement ? descriptionElement.textContent.trim() : '';

    // Extract analysis and sources (all paragraphs in chart-analysis)
    const analysisElements = section.querySelectorAll('.chart-analysis p');
    let analysis = '';
    analysisElements.forEach(p => {
        analysis += p.textContent.trim() + '\n\n';
    });

    // Construct the text to copy
    const textToCopy = `${title}

${description}

${analysis.trim()}`;

    // Convert canvas to blob
    canvas.toBlob(blob => {
        if (!blob) {
            alert('Failed to convert chart to image');
            return;
        }

        // Create ClipboardItem with both image and text
        const clipboardItem = new ClipboardItem({
            'image/png': blob,
            'text/plain': new Blob([textToCopy], { type: 'text/plain' })
        });

        // Copy to clipboard
        navigator.clipboard.write([clipboardItem])
            .then(() => {
                // Show success feedback
                const originalText = buttonElement.textContent;
                buttonElement.textContent = '✓ Copied!';
                buttonElement.style.backgroundColor = '#27ae60';
                
                setTimeout(() => {
                    buttonElement.textContent = originalText;
                    buttonElement.style.backgroundColor = '';
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy:', err);
                alert('Failed to copy to clipboard. Try using Chrome or Edge browser.');
            });
    }, 'image/png');
}

